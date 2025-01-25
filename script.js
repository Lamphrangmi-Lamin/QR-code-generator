const userInput = document.getElementById('user-input');
const qrCodeContainer = document.getElementById('qrcode');
const generateQrCodeBtn = document.getElementById('generate-qr-code-btn');
const refreshQrCodeBtn = document.getElementById('refresh-qr-code-btn');
let qrCode;


// creating a function using the qrcode.js library to generate a qr code instance
const generateQRCode = () => {
    const text = userInput.value;
    console.log(text);
    console.log("Generating QR code...")
    qrCode = new QRCode(qrCodeContainer, {
        text: text,
        width: 325,
        height: 325,
        colorDark: "#000000",   
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    console.log("Success...")
}

// adding functionality to the generate button
generateQrCodeBtn.addEventListener('click', () => {
    if (!qrCode) {
        generateQRCode();
    }
});

// adding functionality to the refresh button
refreshQrCodeBtn.addEventListener('click', () => {
    qrCode.clear();
    qrCodeContainer.innerHTML = '';
    qrCode = null;
    console.log("CLEARED");
})