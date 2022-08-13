let cannang =parseFloat(prompt('Nhập cân nặng'));
let chieucao =parseFloat(prompt('Nhập chiều cao'));
let bmi = cannang/(chieucao * chieucao);

if (bmi < 0) {
    alert('Nhập lại');
} else if (bmi < 18.5) {
    alert('Gầy');
} else if (bmi < 25 ) {
    alert('Bình thường');
} else if (bmi < 30) {
    alert('Thừa cân');
} else {
    alert('Béo phì')
}