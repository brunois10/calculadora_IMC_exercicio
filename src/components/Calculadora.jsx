import { useState } from "react"

const IMCCalc = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [interpretação, setInterpretação] = useState('');

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const calculoIMC = peso / (alturaMetros * alturaMetros);
        const arredondadoIMC = Math.round(calculoIMC * 100) / 100;
        setIMC(arredondadoIMC);

        if (arredondadoIMC < 18.5) {
            setInterpretação('Magro');
        } else if (arredondadoIMC < 24.9) {
            setInterpretação('Peso ideal');
        } else if (arredondadoIMC < 29.9) {
            setInterpretação('Sobrepeso');
        } else if (arredondadoIMC < 34.9) {
            setInterpretação('Obesidade Grau I');
        } else if (arredondadoIMC < 39.9) {
            setInterpretação('Obesidade Grau II');
        } else {
            setInterpretação('Obesidade Grau III');
        }
    };

    return (
        <div>
            <h2>Calculadora de IMC</h2>
            <div>
                <label>Altura (cm):</label>
                <input type="number" onChange={(e) => setAltura(e.target.value)} />
            </div>
            <div>
                <label>Peso (kg):</label>
                <input type="number" onChange={(e) => setPeso(e.target.value)} />
            </div>
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc && (
                <div>
                    <p>IMC: {imc}</p>
                    <p>Classificação: {interpretação}</p>
                </div>
            )}
        </div>
    );
};

export default IMCCalc