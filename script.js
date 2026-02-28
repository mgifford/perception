let currentStep = 0;
const totalSteps = 7;
let unlockedStep = 0;
let players = {};
let completedVideos = new Set();

// Step Management
function showStep(stepIndex) {
    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));
    const currentSection = document.getElementById(`step-${stepIndex}`);
    if (currentSection) {
        currentSection.classList.add('active');
        window.scrollTo(0, 0);
    }
    updateProgress(stepIndex);
    saveProgress();
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function updateProgress(stepIndex) {
    const progress = (stepIndex / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

// Able Player Integration
$(document).on('ableplayerready', function(event) {
    const player = event.target.ablePlayer;
    const mediaId = player.$media.attr('id');
    
    // Config mapping for buttons
    const nextBtnMap = {
        'player-1': 'next-1',
        'player-2': 'next-2',
        'player-3a': 'next-3',
        'player-3b': 'next-3',
        'player-4': 'next-4',
        'player-6': 'next-6'
    };

    // Listen for media completion
    player.$media.on('ended', function() {
        handleVideoCompletion({
            id: mediaId,
            nextBtn: nextBtnMap[mediaId]
        });
    });
});

function handleVideoCompletion(config) {
    completedVideos.add(config.id);
    
    // Check if step is fully complete
    let isComplete = false;
    if (config.id === 'player-1') isComplete = true;
    if (config.id === 'player-2') isComplete = true;
    if (config.id === 'player-3a' || config.id === 'player-3b') {
        if (completedVideos.has('player-3a') && completedVideos.has('player-3b')) isComplete = true;
    }
    if (config.id === 'player-4') isComplete = true;
    if (config.id === 'player-6') isComplete = true;

    if (isComplete) {
        const nextBtn = document.getElementById(config.nextBtn);
        if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.innerText = "Continue to Next Phase";
        }
        
        // Update unlocked step if this is the latest one
        const stepNum = parseInt(config.nextBtn.split('-')[1]);
        if (unlockedStep < stepNum) {
            unlockedStep = stepNum;
        }
        saveProgress();
    }
}

// Persistence
function saveProgress() {
    const state = {
        currentStep,
        unlockedStep,
        reflections: {}
    };
    
    // Save all current reflection values
    document.querySelectorAll('textarea').forEach(ta => {
        state.reflections[ta.id] = ta.value;
    });
    
    localStorage.setItem('perception_site_progress', JSON.stringify(state));
}

function loadProgress() {
    const saved = localStorage.getItem('perception_site_progress');
    if (saved) {
        const state = JSON.parse(saved);
        currentStep = state.currentStep || 0;
        unlockedStep = state.unlockedStep || 0;
        
        // Restore reflections
        if (state.reflections) {
            Object.keys(state.reflections).forEach(id => {
                const ta = document.getElementById(id);
                if (ta) ta.value = state.reflections[id];
            });
        }
        
        // Unlock buttons based on progress
        for (let i = 1; i <= unlockedStep; i++) {
            const btn = document.getElementById(`next-${i}`);
            if (btn) {
                btn.disabled = false;
                btn.innerText = "Continue to Next Phase";
            }
        }
        
        showStep(currentStep);
    }
}

function resetProgress() {
    if (confirm("Are you sure you want to reset all progress? This will clear your reflections and lock the videos.")) {
        localStorage.removeItem('perception_site_progress');
        location.reload();
    }
}

// Auto-save reflections as user types
document.addEventListener('input', (e) => {
    if (e.target.tagName === 'TEXTAREA') {
        saveProgress();
    }
});

// Initial load
window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
});
