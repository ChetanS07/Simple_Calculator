var expression = ''

function handleClick(btn) {
    let text = btn.value;

    const textOnScreen = document.getElementById('text-on-screen');
    const topExpression = document.getElementById('top-expression');
    const heading = document.querySelector('h4');

    switch (text) {
        case 'AC':
            expression = '';
            textOnScreen.innerText = expression;
            topExpression.innerText = expression;
            heading.innerText = "Enter Expression";
            break;
        case '=':
            if (expression.length != 0) {
                if (expression.length < 16) {
                    try {
                        answer = eval(expression).toString();

                        // if(answer.lenght > 15)
                        answer.slice(0, 15);
                        console.log(typeof answer);
                        textOnScreen.innerText = answer;
                        topExpression.innerText = expression;
                        heading.innerText = "Answer";
                        expression = '';
                    } catch (e) {
                        expression = ''
                        document.getElementById('top-expression').innerHTML = "<p style=\"color:red\">Invalid Expression</p>";
                    }
                }
            } else {
                document.getElementById('top-expression').innerHTML = "<p style=\"color:red\">Invalid Expression</p>";
            }
            break;
        case 'BS':
            expression = expression.slice(0, expression.length - 1);
            textOnScreen.innerText = expression;
            break;
        default:
            expression += text;
            topExpression.innerText = '';
            document.getElementById('text-on-screen').innerText = expression;
            break;
    }
}


function toggleMode() {
    // alert('toggling')
    const calcBackground = document.querySelector(".calc");
    calcBackground.classList.toggle('calc-dark');
    document.querySelector('body').classList.toggle('body-dark');

    let btns = document.querySelectorAll('.calc-btn');

    btns.forEach(element => {
        element.classList.toggle('calc-btn-dark')
    });

    document.querySelector('.info-article > *').classList.toggle('intro-dark')
    document.querySelector('.contact-article').classList.toggle('contact-article-dark')
    let contactIcons = document.querySelectorAll('.contact-icon');

    contactIcons.forEach(element => {
        element.classList.toggle('contact-article-dark')
    })
}