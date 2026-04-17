const display = document.getElementById("display");

function add(v) {
    display.value += v;
}

function clearDisplay() {
    display.value = "";
}

function calc() {
    try {
        let expr = display.value;

        // 🔥 corrige parênteses automaticamente
        let open = (expr.match(/\(/g) || []).length;
        let close = (expr.match(/\)/g) || []).length;
        expr += ")".repeat(open - close);

        display.value = eval(expr);
    } catch {
        display.value = "Erro";
    }
}

// modo claro/escuro
function toggleMode() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

// Integral (aproximação)
function integral(f, a, b, n=1000) {
    let dx = (b - a) / n;
    let soma = 0;
    for (let i = 0; i < n; i++) {
        let x = a + i * dx;
        soma += f(x) * dx;
    }
    return soma;
}

function integralPrompt() {
    let expr = prompt("f(x) = ");
    let a = parseFloat(prompt("Limite inferior:"));
    let b = parseFloat(prompt("Limite superior:"));

    let f = x => eval(expr);
    display.value = integral(f, a, b);
}

// Somatório
function sumPrompt() {
    let expr = prompt("Expressão (use x):");
    let a = parseInt(prompt("Início:"));
    let b = parseInt(prompt("Fim:"));

    let soma = 0;
    for (let x = a; x <= b; x++) {
        soma += eval(expr);
    }

    display.value = soma;
}

// Produtório
function prodPrompt() {
    let expr = prompt("Expressão (use x):");
    let a = parseInt(prompt("Início:"));
    let b = parseInt(prompt("Fim:"));

    let prod = 1;
    for (let x = a; x <= b; x++) {
        prod *= eval(expr);
    }

    display.value = prod;
}