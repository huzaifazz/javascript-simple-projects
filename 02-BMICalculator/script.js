const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `<span style="color: #e74c3c;">Please enter a valid height</span>`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `<span style="color: #e74c3c;">Please enter a valid weight</span>`
    } else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        
        // Determine BMI category
        let category = '';
        let categoryColor = '';
        
        if (bmi < 18.6) {
            category = 'Underweight';
            categoryColor = '#3498db';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'Normal';
            categoryColor = '#27ae60';
        } else {
            category = 'Overweight';
            categoryColor = '#e67e22';
        }

        //show the result
        results.innerHTML = `
            <div style="color: ${categoryColor};">
                <div style="font-size: 2.5rem; margin-bottom: 5px;">${bmi}</div>
                <div style="font-size: 1.2rem;">${category}</div>
            </div>
        `;
    }
})
