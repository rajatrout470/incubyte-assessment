class StringCalculator {
    add(numbers) {
        if (!numbers) {
            return 0; 
        }
        
        let delimiter = /,|\n/; 
        if (numbers.startsWith("//")) {
            const delimiterSection = numbers.split("\n")[0];
            delimiter = new RegExp(delimiterSection.slice(2)); 
            numbers = numbers.split("\n")[1];
        }

        const numberArray = numbers.split(delimiter).map(Number);
        
        // Check for negative numbers
        const negativeNumbers = numberArray.filter(n => n < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }

        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}
``