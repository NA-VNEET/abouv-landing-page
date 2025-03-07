
// Create stars background
function createStars() {
    const stars = document.getElementById('stars');
    const numStars = 50;
            
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
                
        // Random positioning
        const x = Math.random() * 100;
        const y = Math.random() * 100;
                
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
                
        // Random size variation
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
                
        // Random animation durations and delays
        const twinkleDuration = (Math.random() * 4 + 2) + 's';
        const floatDuration = (Math.random() * 30 + 15) + 's';
        const animationDelay = (Math.random() * -20) + 's';
                
        star.style.setProperty('--twinkle-duration', twinkleDuration);
        star.style.setProperty('--float-duration', floatDuration);
        star.style.animationDelay = animationDelay;
                
        stars.appendChild(star);
    }
}
        
// Add this function after createStars
function maintainStars() {
    const stars = document.getElementById('stars');
            
    setInterval(() => {
        const star = document.createElement('div');
        star.classList.add('star');
                
        // Random horizontal position
        const x = Math.random() * 100;
        star.style.left = `${x}%`;
        star.style.top = '100%';
              
        // Random size variation
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
              
        // Random animation durations
        const twinkleDuration = (Math.random() * 4 + 2) + 's';
        const floatDuration = (Math.random() * 30 + 15) + 's';
                
        star.style.setProperty('--twinkle-duration', twinkleDuration);
        star.style.setProperty('--float-duration', floatDuration);
               
        stars.appendChild(star);
                
        // Remove star after animation completes
        setTimeout(() => {
            if (star.parentNode === stars) {
                star.remove();
                }
            }, parseFloat(floatDuration) * 1000);
          }, 800); // Create new star slightly more frequently
    }
        
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    maintainStars();
    const mobileInputContainer = document.getElementById('mobileInputContainer');
    const phoneInput = document.getElementById('phoneInput');
    const errorMessage = document.getElementById('errorMessage');
    const continueBtn = document.getElementById('continueBtn');
    const signupBtn = document.getElementById('signupBtn');

    function showMobileInput() {
        signupBtn.style.display = 'none';
        mobileInputContainer.style.display = 'block';
        phoneInput.focus();
    }

    function hideMobileInput() {
        mobileInputContainer.style.display = 'none';
        signupBtn.style.display = 'block';
        phoneInput.value = '';
        errorMessage.style.display = 'none';
        continueBtn.disabled = true;
        }

    signupBtn.addEventListener('click', showMobileInput);

    // Add click event listeners for handling outside clicks
    document.addEventListener('click', (e) => {
    const isClickInsideInput = mobileInputContainer.contains(e.target);
    const isClickOnSignup = signupBtn.contains(e.target);
                
    if (!isClickInsideInput && !isClickOnSignup && mobileInputContainer.style.display === 'block') {
        hideMobileInput();
        }
});

// Prevent clicks inside the mobile input from bubbling up
mobileInputContainer.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Add escape key support
 document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileInputContainer.style.display === 'block') {
            hideMobileInput();
            }
        });

            phoneInput.addEventListener('input', (e) => {
                const value = e.target.value.replace(/[^0-9]/g, '');
                e.target.value = value;
                
                if (value.length === 10) {
                    errorMessage.style.display = 'none';
                    continueBtn.disabled = false;
                } else {
                    if (value.length > 0) {
                        errorMessage.style.display = 'block';
                    } else {
                        errorMessage.style.display = 'none';
                    }
                    continueBtn.disabled = true;
                }
            });

    continueBtn.addEventListener('click', () => {
                // Add your logic here for what happens when continue is clicked
                console.log('Continue with phone:', phoneInput.value);
                // Example: Show success message or proceed to next step
                alert('OTP sent to ' + phoneInput.value);
        });
});