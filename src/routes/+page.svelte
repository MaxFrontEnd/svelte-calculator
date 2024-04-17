<script lang="ts">
	const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
	const operations = ['/', '*', '-', '+', '='];

	let selectedOperation = '';
	let display = '';
	let firstNumber = '';
	let secondNumber = '';
	const handleOperationClick = (operation: string) => {
		if (firstNumber === '') return;
		if (operation === '=') {
			if (secondNumber === '') return;
			const firstNum = parseInt(firstNumber);
			const secondNum = parseInt(secondNumber);

			let results = '';
			switch (selectedOperation) {
				case '/':
					results = (firstNum / secondNum).toFixed(2);
					break;

				case '*':
					results = (firstNum * secondNum).toFixed(2);
					break;

				case '+':
					results = (firstNum + secondNum).toFixed(2);
					break;

				case '-':
					results = (firstNum - secondNum).toFixed(2);
					break;
			}

			display = results;
		}
		selectedOperation = operation;
	};

	const handleNumberClick = (number: string) => {
		if (display === '' && number === '0') return;
		if (number === '.' && display.includes('.')) return;
		if (display === '' && number === '.') return (display = '0.');

		if (!selectedOperation) {
			if (display === '' && number === '.') {
				firstNumber = '0.';
				display = firstNumber;
			}
			firstNumber = `${firstNumber}${number}`;
			display = firstNumber;
		} else {
			display = '';
			if (display === '' && number === '.') {
				secondNumber = '0.';
			}
			secondNumber = `${secondNumber}${number}`;
			display = secondNumber;
		}
	};
	const clearResult = () => {
		firstNumber = '';
		secondNumber = '';
		display = '';
		selectedOperation = '';
	};
</script>

<nav>
	<h1 data-test="home-label">Calculator</h1>
</nav>

<main>
	<div class="calculator">
		<div class="results" data-test="result-field">{display}</div>
		<div class="digits">
			<div class="numbers">
				<button
					class="btn btn-xlg"
					data-test="button-c"
					on:click={() => {
						clearResult();
					}}>C</button
				>
				{#each numbers as number (number)}
					<button
						class={`btn ${number === '0' ? 'btn-lg' : null}`}
						data-test={`button-${number}`}
						on:click={() => {
							handleNumberClick(number);
						}}>{number}</button
					>
				{/each}
			</div>
			<div class="operations">
				{#each operations as operator (operator)}
					<button
						class={`btn ${operator === selectedOperation ? 'btn-silver' : 'btn-orange'}`}
						data-test={`operator-${operator}`}
						on:click={() => {
							handleOperationClick(operator);
						}}>{operator}</button
					>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	h1 {
		margin: 0;
	}
	nav {
		height: 5rem;
		text-align: center;
		font-size: 3rem;
		color: rgb(77, 71, 64);
	}
	main {
		align-items: center;
		width: 100vw;
		height: 90vh;
	}
	.calculator {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgb(28, 28, 28);
		width: 240px;
		padding: 15px;
		border-radius: 7px;
	}
	.digits {
		display: flex;
	}
	.operations {
		display: flex;
		flex-direction: column;
	}
	.numbers {
		display: flex;
		flex-wrap: wrap;
		width: 200px;
	}
	.btn {
		width: 50px;
		height: 50px;
		border-radius: 100px;
		background-color: rgb(114, 113, 113);
		font-size: 20px;
		font-weight: bold;
		color: white;
		margin: 5px;
		border: none;
	}
	.btn-lg {
		width: 110px;
	}
	.btn-orange {
		background-color: orange;
	}
	.btn-silver {
		background-color: silver;
	}
	.btn-xlg {
		width: 170px;
	}
	.results {
		height: 60px;
		color: white;
		font-size: 50px;
		display: flex;
		flex-direction: row-reverse;
		margin-right: 10px;
	}
</style>
