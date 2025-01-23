const userInput = document.getElementById('user-input');
const qrCodeContainer = document.getElementById('qrcode');
const generateQrCodeBtn = document.getElementById('generate-qr-code-btn');


const generateQRCode = () => {
    const text = userInput.value;
    console.log(text);
    console.log("Generating QR code...")
    const qrCode = new QRCode(qrCodeContainer, {
        text: text,
        width: 325,
        height: 325,
        colorDark: "#000000",   
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    console.log("Success...")
}

generateQrCodeBtn.addEventListener('click', generateQRCode);