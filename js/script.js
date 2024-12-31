
const kirim = document.getElementById('kirim');
const parentHarapan = document.querySelector('div.harapan');
// Mengambil nilai dari pengguna
const nilai = () => {
	const nama = document.getElementById('nama');
	const kalimat = document.getElementById('kalimat');
	return {
		nama: nama.value,
		kalimat: kalimat.value,
	};
};
// Akhir mengambil nilai dari pengguna

// Ketika diklik
kirim.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('div.awal').style.display = 'none';
	document.querySelector('div.bg').style.display = 'block';
	const duaRibu25 = document.querySelector('div.bg div.heading h1');
	console.log(duaRibu25);
	const penyampai = document.getElementById('penyampai');
	const {nama, kalimat} = nilai();
	const ucapan = document.querySelector('p.ucapan');
	penyampai.innerHTML = `Harapan ${nama}, `;
	const textToType = `"${kalimat}"`;
	const selamatTahunBaru = document.querySelector('div.bg h2');
	let index = 0;

	setInterval(() => {
		const angle = Math.floor(Math.random() * 360); 
		const color1 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
			Math.random() * 255,
		)}, ${Math.floor(Math.random() * 255)})`;
		const color2 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
			Math.random() * 255,
		)}, ${Math.floor(Math.random() * 255)})`;

		// Terapkan warna gradient pada teks
		duaRibu25.style.backgroundImage = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
	}, 1000);

	function typeText(onComplete) {
		if (index < textToType.length) {
			ucapan.innerHTML += textToType.charAt(index);
			index++;
			setTimeout(() => typeText(onComplete), 100); 
		} else {
			if (onComplete) onComplete();
		}
	}
	// Efek penulisan dan Pemunculan selesai
	typeText(() => {
		ucapan.setAttribute('selesai', true); 
		
		duaRibu25.style.animation = 'down 2s linear 1 forwards';

		selamatTahunBaru.style.animation = 'down 1s linear 1 forwards';
		
		setTimeout(() => {
			$(document).ready(function () {
				$('.bg').fireworks();
			});
		}, 100);
		setTimeout(() => {
			parentHarapan.style.display = 'none';
		}, 4000);
	});
});
// Akhir ketika diklik