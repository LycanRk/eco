document.getElementById('gastosForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const salario = parseFloat(document.getElementById('salario').value);
    const essenciais = parseFloat(document.getElementById('essenciais').value);
    const naoEssenciais = parseFloat(document.getElementById('naoEssenciais').value);

    if (salario <= 0 || essenciais < 0 || naoEssenciais < 0) {
        alert('Por favor, insira valores válidos (números positivos) para calcular.');
        return;
    }

    const totalDespesas = essenciais + naoEssenciais;

    if (totalDespesas > salario) {
        alert('As despesas não podem ser maiores que o salário!');
        return;
    }

    const porcentagemEssenciais = (essenciais / salario) * 100;
    const porcentagemNaoEssenciais = (naoEssenciais / salario) * 100;
    const porcentagemRestante = 100 - porcentagemEssenciais - porcentagemNaoEssenciais;

    document.getElementById('porcentagemEssenciais').innerText = `Porcentagem gasta com despesas essenciais: ${porcentagemEssenciais.toFixed(2)}%`;
    document.getElementById('porcentagemNaoEssenciais').innerText = `Porcentagem gasta com despesas não essenciais: ${porcentagemNaoEssenciais.toFixed(2)}%`;
    document.getElementById('porcentagemRestante').innerText = `Porcentagem do restante do dinheiro: ${porcentagemRestante.toFixed(2)}%`;

    const alertas = [];

    if (porcentagemEssenciais > 50) {
        alertas.push('ALERTA: A porcentagem gasta com despesas essenciais está acima de 50%!');
    }

    if (porcentagemNaoEssenciais > 30) {
        alertas.push('ALERTA: A porcentagem gasta com despesas não essenciais está acima de 30%!');
    }

    if (porcentagemRestante < 20) {
        alertas.push('ALERTA: A porcentagem do restante do dinheiro está abaixo de 20%!');
    }

    const alertasElement = document.getElementById('alertas');
    alertasElement.innerText = alertas.join('\n');

    document.getElementById('resultado').classList.remove('hidden');
});
