
    const stories = [
      { text: "Maine ek bachche se poocha, 'Aaj anganwadi kyu nahi gaye?' Bachche bola, 'Kal mujhe wahan tol rahe the, kya pata aaj mujhe bech dein!' 😂",
        options: [
          { text: "Bachcha serious tha?", correct: false },
          { text: "Bachcha funny tha!", correct: true },
          { text: "Anganwadi closed thi?", correct: false }
        ]
      },
      { text: "Kitni ajeeb baat hai, duniya ke notes par tasveer aadmi ki hai aur rajya aurton ka chalta hai. 🤯",
        options: [
          { text: "Note ka rule funny hai!", correct: true },
          { text: "Auratein rule karti hai?", correct: false },
          { text: "Aadmi bhi confuse ho gaya?", correct: false }
        ]
      },
      { text: "Ab ye afwah kaun phaila raha hai ki Baba Ramdev hi bachpan me Mowgli the, isliye unhe jungle ke saare aushadhi ke bare me pata hai? 😆",
        options: [
          { text: "Baba Ramdev jungle expert!", correct: false },
          { text: "Afwah hi funny thi!", correct: true },
          { text: "Woh Mowgli ban gaye?", correct: false }
        ]
      },
      { text: "Barish ka mausam thamta hi, shehar wale: 'Wow, kitna pyara mausam hai' aur gaon wale: 'Jaldi se mobile charge kar lo, pakka light jayegi!' 🌧😂",
        options: [
          { text: "Gaon wale practical!", correct: true },
          { text: "Shehar wale serious!", correct: false },
          { text: "Mobile aur barish fight!", correct: false }
        ]
      },
      { text: "Jaise pakka hi hone wala tha ki kitchen se ladki ne awaaz lagai, 'Mummy, chai me kitni seeti lagaoon?' Kasam se, ladke wale ye bolne ke liye bhi na rukte ki hum chalte hain. 😜",
        options: [
          { text: "Ladka confused tha?", correct: false },
          { text: "Situation funny thi!", correct: true },
          { text: "Chai over ho gayi?", correct: false }
        ]
      }
    ];

    let currentStory = 0;

    const dashboard = document.getElementById("dashboard");
    const yesBtn = document.getElementById("yesBtn");
    const storyScreen = document.getElementById("storyScreen");
    const storyEl = document.getElementById("story");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");

    yesBtn.addEventListener("click", () => {
      dashboard.style.display = "none";
      storyScreen.style.display = "block";
      loadStory(currentStory);
    });

    function loadStory(index) {
      const story = stories[index];
      storyEl.textContent = story.text;
      optionsEl.innerHTML = "";
      story.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt.text;
        btn.onclick = () => checkAnswer(opt.correct);
        optionsEl.appendChild(btn);
      });
    }

    function checkAnswer(isCorrect) {
      if (isCorrect) {
        launchEmojis();
      } else {
        alert("Galat jawab 🤪 Try again!");
      }
    }

    function launchEmojis() {
      const emojis = ["😂", "🤣", "😜", "🤩"];
      for (let i = 0; i < 15; i++) {
        const emoji = document.createElement("div");
        emoji.className = "emoji";
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = window.innerHeight + "px";
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 2000);
      }
    }

    nextBtn.addEventListener("click", () => {
      currentStory = (currentStory + 1) % stories.length;
      loadStory(currentStory);
    });
  