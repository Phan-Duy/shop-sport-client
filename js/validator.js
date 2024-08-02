// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        
        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }
        
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = '';
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function (inputElement) {
               // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                } 
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined :  message || 'Vui lòng nhập lại mật khẩu'
        }
    };
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || 'Vui lòng nhập email';
        }
    };
}


Validator.isPassword = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            return regex.test(value) ? undefined :  message || 'Mật khẩu phải chứa ít nhất 1 chữ thường, một chữ hoa, một chữ số và 1 kí tự đặc biệt';
        }
    };
}




Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined :  message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.maxLength = function (selector, max, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length <= max ? undefined :  message || `Vui lòng nhập tối đa ${max} kí tự`;
        }
    };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}


const pwShowHide = document.querySelectorAll(".eye-icon");
const pwFields = document.querySelectorAll("input[type='password']");

pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach((field, index) => {
            if (field.type === "password") {
                field.type = "text";
                pwShowHide[index].classList.remove("fa-eye-slash");
                pwShowHide[index].classList.add("fa-eye");
            } else {
                field.type = "password";
                pwShowHide[index].classList.remove("fa-eye");
                pwShowHide[index].classList.add("fa-eye-slash");
            }
        });
    });
});


const forms = document.querySelector(".forms"),
links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signups")
    })
})


document.addEventListener("DOMContentLoaded", function () {
    // Mong muốn của chúng ta
    var successMessage = document.getElementById("success-message");

    Validator({
        form: "#form-1",
        formGroupSelector: ".form-field",
        errorSelector: ".form-message",
        rules: [
            // ... (các rule khác)
        ],
        onSubmit: function (data) {
            // Call API hoặc thực hiện các hành động cần thiết
            console.log(data);

            // Hiển thị thông báo thành công
            successMessage.style.display = "block";

            // Nếu muốn sau một khoảng thời gian nào đó, ẩn thông báo
            setTimeout(function () {
                successMessage.style.display = "none";
            }, 5000); // 5000 milliseconds (5 seconds) - bạn có thể điều chỉnh thời gian theo ý muốn
        },
    });
});



document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Reset error messages and background colors
    const errorMessages = document.querySelectorAll(".form-message");
    const allInputs = document.querySelectorAll("#login-form input, #login-form select, #login-form textarea");

    errorMessages.forEach(error => {
        error.textContent = '';
    });

    allInputs.forEach(input => {
        input.style.backgroundColor = 'white';
    });

    let hasError = false;

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    if (email.value.trim() === "") {
        emailError.textContent = "Vui lòng nhập email";
        hasError = true;
    }

    if (password1.value.trim() === "") {
        passwordError.textContent = "Vui lòng nhập mật khẩu";
        hasError = true;
    }

    if (!hasError) {
        // Xử lý đăng nhập ở đây
        // Hiển thị thông báo đăng nhập thành công
        const successMessage = `Đăng nhập thành công!`;
        alert(successMessage);
    }
});
