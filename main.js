// Main JavaScript for Bikini Bottom Ecological Website

// Food chain data
const foodChainLevels = [
    {
        level: 'Producers',
        color: 'from-green-400 to-green-600',
        organisms: [
            { name: 'Phytoplankton', icon: '🦠', description: 'Microscopic algae that photosynthesize using sunlight' },
            { name: 'Algae', icon: '🌿', description: 'Simple plants that form the base of ocean food webs' },
            { name: 'Seaweed', icon: '🌱', description: 'Larger marine plants providing food and shelter' },
        ],
        role: 'Convert sunlight into energy through photosynthesis',
    },
    {
        level: 'Primary Consumers',
        color: 'from-blue-400 to-blue-600',
        organisms: [
            { name: 'Zooplankton', icon: '🦐', description: 'Tiny animals that feed on phytoplankton' },
            { name: 'Sea Sponges', icon: '<img src="spongebob.png" alt="SpongeBob Icon" class="inline w-8 h-8" style="object-fit:contain;">', description: 'Filter feeders like SpongeBob!' },
            { name: 'Small Fish', icon: '🐟', description: 'Herbivorous fish that eat algae' },
        ],
        role: 'Herbivores that eat producers',
    },
    {
        level: 'Secondary Consumers',
        color: 'from-yellow-400 to-orange-600',
        organisms: [
            { name: 'Jellyfish', icon: '<img src="Jellyfish_icon.png" alt="Jellyfish Icon" class="inline w-8 h-8" style="object-fit:contain;">', description: 'Predators that feed on small fish and plankton' },
            { name: 'Crustaceans', icon: '<img src="Mr_Krabs.png" alt="Mr. Krabs Icon" class="inline w-8 h-8" style="object-fit:contain;">', description: 'Like Mr. Krabs - omnivores eating various foods' },
            { name: 'Medium Fish', icon: '🐠', description: 'Carnivorous fish that eat smaller organisms' },
        ],
        role: 'Carnivores that eat primary consumers',
    },
    {
        level: 'Tertiary Consumers',
        color: 'from-red-400 to-red-600',
        organisms: [
            { name: 'Large Fish', icon: '🐡', description: 'Top predators of the reef' },
            { name: 'Octopuses', icon: '<img src="Squidward.png" alt="Squidward Icon" class="inline w-8 h-8" style="object-fit:contain;">', description: 'Like Squidward - intelligent hunters' },
            { name: 'Sea Turtles', icon: '🐢', description: 'Large predators with varied diets' },
        ],
        role: 'Top predators that eat secondary consumers',
    },
    {
        level: 'Decomposers',
        color: 'from-purple-400 to-purple-600',
        organisms: [
            { name: 'Bacteria', icon: '🦠', description: 'Break down dead organic matter' },
            { name: 'Fungi', icon: '🍄', description: 'Decompose organic material on sea floor' },
            { name: 'Detritus Feeders', icon: '<img src="Sea_Cucumbers.png" alt="Sea Cucumbers Icon" class="inline w-8 h-8" style="object-fit:contain;">', description: 'Organisms that feed on dead matter' },
        ],
        role: 'Break down dead organisms and return nutrients to the ecosystem',
    },
];

// Thermodynamic laws data
const thermodynamicLaws = [
    {
        number: 'First Law',
        title: 'Conservation of Energy',
        icon: '♻️',
        description: 'Energy cannot be created or destroyed, only transformed from one form to another.',
        example: 'When SpongeBob eats a Krabby Patty, chemical energy from food converts to energy for movement!',
        color: 'from-green-400 to-green-600',
    },
    {
        number: 'Second Law',
        title: 'Entropy & Energy Quality',
        icon: '📉',
        description: 'Energy transformations are never 100% efficient. Some energy is always lost as heat.',
        example: 'When jellyfish glow, not all energy becomes light - some becomes heat that warms the water.',
        color: 'from-orange-400 to-red-600',
    },
    {
        number: 'Third Law',
        title: 'Absolute Zero',
        icon: '❄️',
        description: 'As temperature approaches absolute zero, entropy approaches a minimum value.',
        example: 'The deepest parts of Bikini Bottom are cold, but even there, molecules still move!',
        color: 'from-blue-400 to-blue-600',
    },
    {
        number: 'Zeroth Law',
        title: 'Thermal Equilibrium',
        icon: '⚖️',
        description: 'If two systems are in thermal equilibrium with a third, they are in equilibrium with each other.',
        example: 'Ocean water temperature stays relatively constant because everything exchanges heat equally.',
        color: 'from-purple-400 to-purple-600',
    },
];

// Biogeochemical cycles data
const cycles = {
    carbon: {
        name: 'Carbon Cycle',
        icon: '💨',
        color: 'from-gray-400 to-gray-600',
        description: 'Carbon moves between the ocean, atmosphere, and living organisms',
        phases: [
            { step: 'Atmospheric CO₂', icon: '☁️', description: 'Carbon dioxide in ocean water' },
            { step: 'Photosynthesis', icon: '🌿', description: 'Algae and phytoplankton absorb CO₂' },
            { step: 'Consumption', icon: '🐟', description: 'Animals eat plants, incorporating carbon' },
            { step: 'Respiration', icon: '💨', description: 'Organisms release CO₂ back' },
            { step: 'Decomposition', icon: '🦠', description: 'Dead matter releases carbon' },
            { step: 'Sediment Storage', icon: '<img src="Sediment_icon.png" alt="Sediment Icon" class="inline w-8 h-8" style="object-fit:contain;">', description: 'Carbon stored in ocean floor' },
        ],
        bikinibottom: 'When SpongeBob exhales, he releases CO₂ bubbles! Algae on coral reefs use this CO₂ to grow, then fish eat the algae, continuing the cycle.',
    },
    nitrogen: {
        name: 'Nitrogen Cycle',
        icon: '💧',
        color: 'from-blue-400 to-blue-600',
        description: 'Nitrogen is essential for proteins and DNA in all living things',
        phases: [
            { step: 'Nitrogen Fixation', icon: '🦠', description: 'Bacteria convert N₂ to usable forms' },
            { step: 'Assimilation', icon: '🌱', description: 'Plants absorb nitrogen compounds' },
            { step: 'Consumption', icon: '🦐', description: 'Animals eat plants for nitrogen' },
            { step: 'Ammonification', icon: '🔁', description: 'Decomposers break down waste' },
            { step: 'Nitrification', icon: '🔬', description: 'Bacteria convert ammonia to nitrates' },
            { step: 'Denitrification', icon: '💨', description: 'Some bacteria return N₂ to water' },
        ],
        bikinibottom: 'Bacteria in the sand near the Krusty Krab help convert nitrogen waste into nutrients that kelp forests can use!',
    },
    water: {
        name: 'Water Cycle',
        icon: '💧',
        color: 'from-cyan-400 to-cyan-600',
        description: 'Water continuously moves through different states and locations',
        phases: [
            { step: 'Ocean Storage', icon: '🌊', description: 'Most water exists in oceans' },
            { step: 'Evaporation', icon: '☀️', description: 'Surface water becomes vapor' },
            { step: 'Condensation', icon: '☁️', description: 'Water vapor forms clouds' },
            { step: 'Precipitation', icon: '🌧️', description: 'Rain returns water to ocean' },
            { step: 'Currents', icon: '🌀', description: 'Ocean currents distribute water' },
            { step: 'Absorption', icon: '🧽', description: 'Organisms use and store water' },
        ],
        bikinibottom: 'Even though Bikini Bottom is underwater, the water cycle affects us! Ocean currents bring fresh water and nutrients from different areas.',
    },
    phosphorus: {
        name: 'Phosphorus Cycle',
        icon: '⚡',
        color: 'from-yellow-400 to-orange-600',
        description: 'Phosphorus is crucial for DNA, bones, and energy transfer (ATP)',
        phases: [
            { step: 'Rock Weathering', icon: '<img src="Rock_Weathering.png" alt="Rock Weathering Icon" class="inline w-8 h-8" style="object-fit:contain;">', description: 'Phosphorus released from rocks' },
            { step: 'Absorption', icon: '🌿', description: 'Plants take up phosphates' },
            { step: 'Consumption', icon: '🐠', description: 'Animals eat phosphorus-rich food' },
            { step: 'Waste & Death', icon: '💀', description: 'Organisms release phosphorus' },
            { step: 'Decomposition', icon: '🦠', description: 'Bacteria break down organic matter' },
            { step: 'Sedimentation', icon: '<img src="Sediment_icon.png" alt="Sediment Icon" class="inline w-8 h-8" style="object-fit:contain;">', description: 'Phosphorus settles to ocean floor' },
        ],
        bikinibottom: 'Underwater volcanoes near Bikini Bottom release phosphorus from deep rocks, providing nutrients for the whole ecosystem!',
    },
    sulfur: {
        name: 'Sulfur Cycle',
        icon: '🌋',
        color: 'from-yellow-300 to-yellow-600',
        description: 'Sulfur is important for proteins and is released by volcanic vents',
        phases: [
            { step: 'Volcanic Emissions', icon: '🌋', description: 'Underwater vents release sulfur' },
            { step: 'Bacterial Processing', icon: '🦠', description: 'Bacteria convert sulfur compounds' },
            { step: 'Assimilation', icon: '🌱', description: 'Organisms incorporate sulfur' },
            { step: 'Decomposition', icon: '💀', description: 'Dead matter releases sulfur' },
            { step: 'Oxidation', icon: '⚗️', description: 'Sulfur compounds oxidize' },
            { step: 'Sedimentation', icon: '🏖️', description: 'Sulfur settles in sediments' },
        ],
        bikinibottom: 'The thermal vents near Rock Bottom release sulfur that special bacteria use for energy - no sunlight needed!',
    },
};

// Initialize website functionality
document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeBubbles();
    initializeAnimations();
    initializeFoodChain();
    initializeEnergySection();
    initializeCycles();
    initializeScrollEffects();
    initializeProgressBars();
});

// Navigation functionality
function initializeNavigation() {
    const nav = document.getElementById('navigation');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHome = document.getElementById('nav-home');

    // Handle scroll effects on navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
            mobileMenu.classList.remove('open');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            mobileMenu.classList.add('open');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-target');
            scrollToSection(target);
        });
    });

    navHome.addEventListener('click', () => {
        scrollToSection('home');
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        mobileMenu.classList.remove('open');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Animated bubbles
function initializeBubbles() {
    const bubblesContainer = document.getElementById('bubbles-container');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        const size = Math.random() * 30 + 10;
        const x = Math.random() * 100;
        const duration = Math.random() * 8 + 6;
        const delay = Math.random() * 5;

        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = x + '%';
        bubble.style.animationDuration = duration + 's';
        bubble.style.animationDelay = delay + 's';

        bubblesContainer.appendChild(bubble);

        // Remove bubble after animation
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, (duration + delay) * 1000);
    }

    // Create initial bubbles
    for (let i = 0; i < 15; i++) {
        setTimeout(createBubble, i * 300);
    }

    // Continuously create new bubbles
    setInterval(createBubble, 1000);
}

// Initialize animations
function initializeAnimations() {
    // Hero animations
    const heroContent = document.querySelector('.hero-content');
    const heroSlogan = document.querySelector('.hero-slogan');
    const heroDescription = document.querySelector('.hero-description');
    const heroScroll = document.querySelector('.hero-scroll');

    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
    setTimeout(() => heroSlogan.style.opacity = '1', 400);
    setTimeout(() => heroDescription.style.opacity = '1', 700);
    setTimeout(() => heroScroll.style.opacity = '1', 1000);
}

// Initialize scroll effects
function initializeScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.section-header, .terrain-card, .species-item, .goal-card, .issue-card, .solution-card, .policy-card, .rmdg-card, .energy-concept, .food-level, .law-card'
    );

    animatableElements.forEach(el => observer.observe(el));
}

// Initialize progress bars
function initializeProgressBars() {
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const progress = progressBar.getAttribute('data-progress');
                    progressBar.style.width = progress + '%';
                    progressBar.classList.add('animated');
                }
            }
        });
    }, { threshold: 0.5 });

    const rmdgCards = document.querySelectorAll('.rmdg-card');
    rmdgCards.forEach(card => progressObserver.observe(card));
}

// Food chain functionality
function initializeFoodChain() {
    const foodChainContainer = document.getElementById('food-chain-levels');
    const organismInfo = document.getElementById('organism-info');

    foodChainLevels.forEach((level, levelIndex) => {
        const levelDiv = document.createElement('div');
        levelDiv.className = `food-level bg-gradient-to-r ${level.color} rounded-xl p-6 text-white`;

        levelDiv.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <h4 class="text-2xl">${level.level}</h4>
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/>
                </svg>
            </div>
            <p class="text-sm mb-4 text-white/90">${level.role}</p>
            <div class="grid grid-cols-3 gap-3">
                ${level.organisms.map(organism => `
                    <button class="organism-button" data-organism='${JSON.stringify(organism)}'>
                        <div class="text-3xl mb-1">${organism.icon}</div>
                        <div class="text-xs">${organism.name}</div>
                    </button>
                `).join('')}
            </div>
        `;

        foodChainContainer.appendChild(levelDiv);

        // Add arrow between levels (except last)
        if (levelIndex < foodChainLevels.length - 1) {
            const arrow = document.createElement('div');
            arrow.className = 'flex justify-center py-2';
            arrow.innerHTML = `
                <svg class="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                </svg>
            `;
            foodChainContainer.appendChild(arrow);
        }
    });

    // Add click handlers for organisms
    document.querySelectorAll('.organism-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const organism = JSON.parse(e.currentTarget.getAttribute('data-organism'));
            showOrganismInfo(organism);
        });
    });
}

function showOrganismInfo(organism) {
    const organismInfo = document.getElementById('organism-info');
    organismInfo.innerHTML = `
        <div class="text-center mb-4">
            <div class="text-6xl mb-3">${organism.icon}</div>
            <h4 class="text-2xl text-white mb-2">${organism.name}</h4>
        </div>
        <p class="text-cyan-100 mb-6">${organism.description}</p>
        <div class="bg-white/10 rounded-lg p-4">
            <p class="text-sm text-cyan-100">
                Click on different organisms to learn more about their role in the food chain!
            </p>
        </div>
    `;
}

// Energy section functionality
function initializeEnergySection() {
    const lawsContainer = document.getElementById('thermodynamic-laws');

    thermodynamicLaws.forEach(law => {
        const lawDiv = document.createElement('div');
        lawDiv.className = 'card p-6 bg-white/95 backdrop-blur-sm h-full overflow-hidden relative law-card';

        lawDiv.innerHTML = `
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${law.color} opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div class="relative">
                <div class="flex items-center gap-4 mb-4">
                    <div class="text-5xl">${law.icon}</div>
                    <div>
                        <div class="text-sm text-cyan-600">${law.number}</div>
                        <h4 class="text-xl text-cyan-900">${law.title}</h4>
                    </div>
                </div>
                <p class="text-cyan-800 mb-4">${law.description}</p>
                <div class="bg-gradient-to-r ${law.color} bg-opacity-10 rounded-lg p-4">
                    <p class="text-sm">
                        <strong class="text-white">Bikini Bottom Example:</strong><br>
                        <span class="text-white">${law.example}</span>
                    </p>
                </div>
            </div>
        `;

        lawsContainer.appendChild(lawDiv);
    });
}

// Biogeochemical cycles functionality
function initializeCycles() {
    const cycleTabs = document.querySelectorAll('.cycle-tab');
    const cycleContent = document.getElementById('cycle-content');
    let selectedPhase = null;

    // Initialize with carbon cycle
    showCycle('carbon');

    cycleTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const cycleId = tab.getAttribute('data-cycle');

            // Update active tab and tab-label visibility
            cycleTabs.forEach(t => {
                t.classList.remove('active');
                const label = t.querySelector('.tab-label');
                if (label) label.style.display = 'none';
            });
            tab.classList.add('active');
            const activeLabel = tab.querySelector('.tab-label');
            if (activeLabel) activeLabel.style.display = '';

            // Show cycle content
            showCycle(cycleId);
        });
        // Hide label by default except for active
        if (!tab.classList.contains('active')) {
            const label = tab.querySelector('.tab-label');
            if (label) label.style.display = 'none';
        }
    });

    function showCycle(cycleId) {
        const cycle = cycles[cycleId];
        if (!cycle) return;

        cycleContent.innerHTML = `
            <div class="cycle-content">
                <div class="card p-8 bg-white/95 backdrop-blur-sm mb-6 rounded-lg">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="text-6xl bg-gradient-to-br ${cycle.color} p-4 rounded-2xl">
                            <span class="filter drop-shadow-lg">${cycle.icon}</span>
                        </div>
                        <div>
                            <h3 class="text-3xl text-cyan-900 mb-2">${cycle.name}</h3>
                            <p class="text-cyan-700">${cycle.description}</p>
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-4 mb-6">
                        ${cycle.phases.map((phase, index) => `
                            <button class="cycle-phase p-4 rounded-xl text-left transition-all bg-cyan-50 hover:bg-cyan-100" 
                                    data-phase="${index}" data-cycle="${cycleId}">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="text-3xl">${phase.icon}</div>
                                    <div class="text-xs px-2 py-1 rounded-full bg-cyan-200">Step ${index + 1}</div>
                                </div>
                                <h4 class="text-cyan-900 mb-1">${phase.step}</h4>
                                <p class="text-sm text-cyan-700">${phase.description}</p>
                            </button>
                        `).join('')}
                    </div>
                    
                    <div class="bg-gradient-to-r ${cycle.color} rounded-xl p-6">
                        <h4 class="text-xl text-white mb-3 flex items-center gap-2">
                            <span><img src="spongebob.png" alt="SpongeBob Icon" class="inline w-8 h-8" style="object-fit:contain;"></span> In Bikini Bottom...
                        </h4>
                        <p class="text-white">${cycle.bikinibottom}</p>
                    </div>
                </div>
                
                <div class="card p-6 bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400 rounded-lg">
                    <h4 class="text-xl text-white mb-4 text-center">Cycle Flow</h4>
                    <div class="flex items-center justify-center flex-wrap gap-2">
                        ${cycle.phases.map((phase, index) => `
                            <div class="flex items-center">
                                <div class="text-3xl bg-white/10 backdrop-blur-sm rounded-lg p-3">${phase.icon}</div>
                                ${index < cycle.phases.length - 1 ? '<div class="text-yellow-300 text-2xl mx-2">→</div>' : ''}
                            </div>
                        `).join('')}
                        <div class="text-yellow-300 text-2xl mx-2">🔄</div>
                    </div>
                    <p class="text-center text-cyan-100 mt-4 text-sm">
                        The cycle repeats continuously, sustaining life in Bikini Bottom!
                    </p>
                </div>
            </div>
        `;

        // Add event listeners for phase buttons
        document.querySelectorAll('.cycle-phase').forEach(button => {
            button.addEventListener('click', (e) => {
                const phaseIndex = parseInt(e.currentTarget.getAttribute('data-phase'));
                const currentCycle = e.currentTarget.getAttribute('data-cycle');
                selectPhase(phaseIndex, currentCycle);
            });
        });

        // Show cycle content with animation
        setTimeout(() => {
            const content = document.querySelector('.cycle-content');
            if (content) {
                content.classList.add('visible');
            }
        }, 100);
    }

    function selectPhase(phaseIndex, cycleId) {
        const cycle = cycles[cycleId];
        const phaseButtons = document.querySelectorAll('.cycle-phase');

        phaseButtons.forEach((button, index) => {
            if (index === phaseIndex) {
                button.classList.add('selected');
                // Apply gradient background based on cycle color
                const colorMap = {
                    'from-gray-400 to-gray-600': 'linear-gradient(135deg, #9ca3af, #4b5563)',
                    'from-blue-400 to-blue-600': 'linear-gradient(135deg, #60a5fa, #2563eb)',
                    'from-cyan-400 to-cyan-600': 'linear-gradient(135deg, #22d3ee, #0891b2)',
                    'from-yellow-400 to-orange-600': 'linear-gradient(135deg, #facc15, #ea580c)',
                    'from-yellow-300 to-yellow-600': 'linear-gradient(135deg, #fde047, #ca8a04)'
                };
                button.style.background = colorMap[cycle.color] || 'linear-gradient(135deg, #60a5fa, #2563eb)';
                button.style.color = 'white';
                // Set all children to white
                button.querySelectorAll('*').forEach(child => {
                    child.style.color = 'white';
                });
            } else {
                button.classList.remove('selected');
                button.style.background = '';
                button.style.color = '';
                // Reset children color
                button.querySelectorAll('*').forEach(child => {
                    child.style.color = '';
                });
            }
        });

        selectedPhase = phaseIndex;
    }
}

// Utility function for smooth animations
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, { threshold: 0.1 });

    // Observe elements that should animate on scroll
    document.querySelectorAll('.terrain-card, .species-item, .goal-card, .issue-card, .solution-card, .policy-card, .rmdg-card, .energy-concept, .law-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);