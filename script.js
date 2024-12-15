/* styles.css */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
}

.container {
    text-align: center;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    animation: fadeIn 2s ease-in-out;
}

.dog-image {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
    animation: float 3s infinite ease-in-out;
    filter: drop-shadow(0px 5px 10px rgba(255, 255, 255, 0.5));
    cursor: pointer;
}

.glow-text {
    font-size: 3.5rem;
    color: #ffd700;
    text-shadow: 0 0 10px #ffd700, 0 0 20px #ff4500, 0 0 30px #ff4500;
    animation: glow 1.5s infinite alternate;
    margin-bottom: 10px;
}

.apology-message {
    font-size: 1.5rem;
    line-height: 1.8;
    color: #fff;
    max-width: 600px;
    margin: 0 auto;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}

.forgive-button {
    margin-top: 20px;
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    background: linear-gradient(135deg, #ff7f50, #ff4500);
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
}

.forgive-button:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(255, 69, 0, 0.6);
}

/* Pop-up Shayari Styling */
.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    max-width: 400px;
    color: #333;
}

.shayari-text {
    font-size: 1.5rem;
    color: #FF4500;
}

.close-btn {
    font-size: 2rem;
    cursor: pointer;
    color: #FF4500;
    position: absolute;
    top: 10px;
    right: 20px;
}

/* Animations */
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes glow {
    from {
        text-shadow: 0 0 10px #ffd700, 0 0 20px #ff4500, 0 0 30px #ff4500;
    }
    to {
        text-shadow: 0 0 20px #ff4500, 0 0 30px #ffd700, 0 0 40px #ffd700;
    }
}
