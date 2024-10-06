document.addEventListener("DOMContentLoaded", function () {
    const passcodeInput = document.getElementById("passcode");
    const numberButtons = document.querySelectorAll(".number-button");
    const clearButton = document.getElementById("clear-button");
    const enterButton = document.getElementById("enter-button");
    const openGiftButton = document.getElementById("open-gift");
    const giftContainer = document.getElementById("gift-container");
    const letterContainer = document.getElementById("letter-container");
    const letterElement = document.getElementById("letter");
    const greeting = document.getElementById("greeting");
    const prompt = document.getElementById("prompt");
    numberButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (passcodeInput.value.length < 5) {
                passcodeInput.value += this.dataset.value;
            }
        });
    });

    clearButton.addEventListener("click", function () {
        passcodeInput.value = "";
    });

    enterButton.addEventListener("click", function () {
        checkPasscode(); // Call the function to check the passcode when Enter is pressed
    });
    

    openGiftButton.addEventListener("click", function () {
        letterContainer.style.display = "block";
        greeting.style.display = "none"; // Hide greeting
        prompt.style.display = "none"; // Hide prompt
        document.getElementById("passcode-input").style.display = "none"; // Hide input section
        giftContainer.style.display = "none"; // Hide open gift button
        typeLetter("Hi Boss!! Happy Birthday :D, I'm currently writing this down as the panic creeps in to me because this website is so rushed..I honestly had so many plans for this but I knew time wouldn't side with me so I hope you still appreciate this simple website I made T_T, I'm no expert and it's my first time so yeah ;-;. Welp, I just wanna say that I'm glad I made it to your next party WHAHAHAHAH, your birthday will always be memorable for me because that's when everything started..and I did wish for me to be present on your next birthday again so I'm glad fate granted my wish :3. Anyways, I just wanna say that I'm proud of you, always hihi. Alam kong ang hilig mo ibackstab sarili mo but if you could see yourself the way I see you, you'll understand why I like you so much. Grabe ka boss T__T you got me doing the things I never knew I would do. But it's worth it, ikaw naman yan e' WHAHAHAHA. I hope you'll feel valued and special this day, I really tried my best and prioritized your day more than anything. Just know that I'll always be by your side, kahit lagi mo kong tinataboy, whahahah. Also, can you please talk to me more? :< I mean I know I tend to be busy lately but I really look forward to our little conversations haha. Oh and, thank you din pala for sticking with me, it has almost been a year since I started crushing on you, hanggang ngayon wala pa din nagbago, ikaw padin hihi. Ang silly ng letter na 'to help WHAHAHAHHAH. Pero yun nga, gusto ko lang din sabihin na idk what the future holds for us, I just know that I wanna stay by your side and be your number one supporter :'). I wish you nothing but happiness Jamir. Please stop being so harsh on yourself, you are so loveable kaya?? Di ko man sinasabi sayo palagi but you are enough. Baliw kahit nga di tayo nag-uusap minsan ngumiti ka lang sakin ok na e djk WHAHAHAHAHA. Ah basta, just do whatever makes you happy :>. Wag ka din mapressure sa mga ginagawa ko para sayo, it's simply my love language, pero if gusto mo bumawi tumatanggap po ako ng yakap sir, eme. Wala na ko masabi sir, ang mahalaga birthday mo ngayon<3 HAPPY 16TH BIRTHDAY MY IDOLL I ADORE U SM MWAAAAA -Boss mo");
    });

    function checkPasscode() {
        if (passcodeInput.value === "1007") {
            giftContainer.style.display = "block"; // Show open gift button
            document.getElementById("passcode-input").style.display = "none"; // Hide input section
            document.getElementById("prompt").style.display = "none"; // Hide prompt text
        } else {
            alert("Code is not correct!");
            passcodeInput.value = "";
        }
    }
    

    function typeLetter(text) {
        let i = 0;
        letterElement.textContent = '';
        const speed = 60;
        function type() {
            if (i < text.length) {
                letterElement.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
});
