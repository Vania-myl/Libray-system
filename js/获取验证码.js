const GetCodeButton = document.getElementById('GetCode');
let countdown = 60;
GetCodeButton.addEventListener('click',
    function () {
        GetCodeButton.disabled = true;
        const timer = setInterval(() => {
            GetCodeButton.textContent = `${countdown}秒后重新获取`;
            countdown--;
            if (countdown < 0) {
                clearInterval(timer);
                GetCodeButton.disabled = false;
                GetCodeButton.textContent = '获取验证码';
                countdown = 60;
            }
        }, 1000)
        //这里添加功能
    }
)