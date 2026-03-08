// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Image Carousel
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
let slideInterval;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentSlide * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function startCarousel() {
    slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
}

function stopCarousel() {
    clearInterval(slideInterval);
}

// Start carousel on page load
document.addEventListener('DOMContentLoaded', () => {
    startCarousel();
    
    // Pause carousel on hover
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Donation Impact Calculator
const donationAmount = document.getElementById('donation-amount');
const donationType = document.getElementById('donation-type');
const impactResult = document.getElementById('impact-result');

function calculateImpact() {
    const amount = parseFloat(donationAmount.value);
    const type = donationType.value;
    
    if (!amount || amount <= 0) {
        impactResult.style.display = 'none';
        return;
    }
    
    let impact = '';
    
    switch(type) {
        case 'trees':
            const trees = Math.floor(amount / 1); // $1 per tree
            impact = `Your $${amount} donation can plant approximately <strong>${trees}</strong> trees! These trees will absorb about <strong>${(trees * 48).toFixed(0)}</strong> pounds of CO2 per year.`;
            break;
        case 'ocean':
            const oceanArea = (amount * 10).toFixed(0); // $1 protects 10 sq ft
            impact = `Your $${amount} donation can help protect approximately <strong>${oceanArea}</strong> square feet of ocean habitat, protecting marine life and coral reefs.`;
            break;
        case 'wildlife':
            const acres = (amount / 25).toFixed(2); // $25 protects 1 acre
            impact = `Your $${amount} donation can help protect <strong>${acres}</strong> acres of wildlife habitat, providing safe homes for endangered species.`;
            break;
        case 'climate':
            const co2Reduction = (amount * 50).toFixed(0); // $1 reduces 50 lbs CO2
            impact = `Your $${amount} donation can help reduce <strong>${co2Reduction}</strong> pounds of CO2 emissions through renewable energy projects and climate advocacy.`;
            break;
    }
    
    impactResult.innerHTML = impact;
    impactResult.style.display = 'block';
}

donationAmount.addEventListener('input', calculateImpact);
donationType.addEventListener('change', calculateImpact);

// Native Plants Database
const nativePlants = {
    northeast: {
        wildflowers: [
            {
                name: 'Black-Eyed Susan',
                scientificName: 'Rudbeckia hirta',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '2-3 feet',
                bloomTime: 'Summer to Fall',
                benefits: ['Attracts pollinators', 'Drought tolerant', 'Low maintenance']
            },
            {
                name: 'Wild Bergamot',
                scientificName: 'Monarda fistulosa',
                sun: 'Full Sun to Partial Shade',
                soil: 'Well-drained',
                height: '2-4 feet',
                bloomTime: 'Summer',
                benefits: ['Attracts bees and butterflies', 'Medicinal properties', 'Deer resistant']
            },
            {
                name: 'New England Aster',
                scientificName: 'Symphyotrichum novae-angliae',
                sun: 'Full Sun',
                soil: 'Moist, well-drained',
                height: '3-6 feet',
                bloomTime: 'Fall',
                benefits: ['Late season nectar source', 'Supports monarch butterflies', 'Showy flowers']
            }
        ],
        grasses: [
            {
                name: 'Little Bluestem',
                scientificName: 'Schizachyrium scoparium',
                sun: 'Full Sun',
                soil: 'Dry to medium',
                height: '2-4 feet',
                bloomTime: 'Fall',
                benefits: ['Drought tolerant', 'Winter interest', 'Wildlife habitat']
            }
        ],
        shrubs: [
            {
                name: 'Winterberry',
                scientificName: 'Ilex verticillata',
                sun: 'Full Sun to Partial Shade',
                soil: 'Moist, acidic',
                height: '3-12 feet',
                bloomTime: 'Spring',
                benefits: ['Winter berries for birds', 'Rain garden suitable', 'Showy fruit']
            }
        ],
        trees: [
            {
                name: 'Red Maple',
                scientificName: 'Acer rubrum',
                sun: 'Full Sun to Partial Shade',
                soil: 'Moist, acidic',
                height: '40-60 feet',
                bloomTime: 'Spring',
                benefits: ['Fast growing', 'Fall color', 'Wildlife support']
            },
            {
                name: 'Eastern Redbud',
                scientificName: 'Cercis canadensis',
                sun: 'Full Sun to Partial Shade',
                soil: 'Well-drained',
                height: '20-30 feet',
                bloomTime: 'Spring',
                benefits: ['Early spring blooms', 'Pollinator friendly', 'Urban tolerant']
            }
        ]
    },
    southeast: {
        wildflowers: [
            {
                name: 'Purple Coneflower',
                scientificName: 'Echinacea purpurea',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '2-4 feet',
                bloomTime: 'Summer',
                benefits: ['Medicinal properties', 'Long blooming', 'Drought tolerant']
            },
            {
                name: 'Cardinal Flower',
                scientificName: 'Lobelia cardinalis',
                sun: 'Full Sun to Partial Shade',
                soil: 'Moist',
                height: '2-4 feet',
                bloomTime: 'Summer to Fall',
                benefits: ['Hummingbird magnet', 'Wetland plant', 'Showy red flowers']
            }
        ],
        grasses: [
            {
                name: 'Switchgrass',
                scientificName: 'Panicum virgatum',
                sun: 'Full Sun',
                soil: 'Adaptable',
                height: '3-6 feet',
                bloomTime: 'Fall',
                benefits: ['Biofuel crop', 'Erosion control', 'Wildlife habitat']
            }
        ],
        shrubs: [
            {
                name: 'American Beautyberry',
                scientificName: 'Callicarpa americana',
                sun: 'Full Sun to Partial Shade',
                soil: 'Well-drained',
                height: '3-6 feet',
                bloomTime: 'Summer',
                benefits: ['Purple berries for birds', 'Drought tolerant', 'Ornamental fruit']
            }
        ],
        trees: [
            {
                name: 'Live Oak',
                scientificName: 'Quercus virginiana',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '40-80 feet',
                bloomTime: 'Spring',
                benefits: ['Long-lived', 'Wildlife habitat', 'Storm resistant']
            },
            {
                name: 'Dogwood',
                scientificName: 'Cornus florida',
                sun: 'Partial Shade',
                soil: 'Well-drained, acidic',
                height: '15-30 feet',
                bloomTime: 'Spring',
                benefits: ['Showy spring flowers', 'Bird food', 'Understory tree']
            }
        ]
    },
    midwest: {
        wildflowers: [
            {
                name: 'Prairie Blazing Star',
                scientificName: 'Liatris spicata',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '2-4 feet',
                bloomTime: 'Summer',
                benefits: ['Butterfly magnet', 'Drought tolerant', 'Cut flower']
            },
            {
                name: 'Butterfly Weed',
                scientificName: 'Asclepias tuberosa',
                sun: 'Full Sun',
                soil: 'Dry, well-drained',
                height: '1-2 feet',
                bloomTime: 'Summer',
                benefits: ['Monarch butterfly host', 'Deer resistant', 'Drought tolerant']
            }
        ],
        grasses: [
            {
                name: 'Big Bluestem',
                scientificName: 'Andropogon gerardii',
                sun: 'Full Sun',
                soil: 'Medium to dry',
                height: '4-6 feet',
                bloomTime: 'Late Summer',
                benefits: ['Prairie grass', 'Drought tolerant', 'Wildlife cover']
            }
        ],
        shrubs: [
            {
                name: 'Ninebark',
                scientificName: 'Physocarpus opulifolius',
                sun: 'Full Sun to Partial Shade',
                soil: 'Adaptable',
                height: '5-8 feet',
                bloomTime: 'Late Spring',
                benefits: ['Showy flowers', 'Erosion control', 'Wildlife shelter']
            }
        ],
        trees: [
            {
                name: 'Bur Oak',
                scientificName: 'Quercus macrocarpa',
                sun: 'Full Sun',
                soil: 'Adaptable',
                height: '60-80 feet',
                bloomTime: 'Spring',
                benefits: ['Long-lived', 'Wildlife food', 'Drought tolerant']
            },
            {
                name: 'Serviceberry',
                scientificName: 'Amelanchier arborea',
                sun: 'Full Sun to Partial Shade',
                soil: 'Well-drained',
                height: '15-25 feet',
                bloomTime: 'Early Spring',
                benefits: ['Edible berries', 'Four-season interest', 'Pollinator friendly']
            }
        ]
    },
    southwest: {
        wildflowers: [
            {
                name: 'Desert Marigold',
                scientificName: 'Baileya multiradiata',
                sun: 'Full Sun',
                soil: 'Well-drained, sandy',
                height: '1-2 feet',
                bloomTime: 'Spring to Fall',
                benefits: ['Drought tolerant', 'Long blooming', 'Low water']
            },
            {
                name: 'Penstemon',
                scientificName: 'Penstemon spp.',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '1-3 feet',
                bloomTime: 'Spring to Summer',
                benefits: ['Hummingbird attractor', 'Drought tolerant', 'Variety of colors']
            }
        ],
        grasses: [
            {
                name: 'Blue Grama',
                scientificName: 'Bouteloua gracilis',
                sun: 'Full Sun',
                soil: 'Dry, well-drained',
                height: '1-2 feet',
                bloomTime: 'Summer',
                benefits: ['Drought tolerant', 'Low water', 'Turf alternative']
            }
        ],
        shrubs: [
            {
                name: 'Apache Plume',
                scientificName: 'Fallugia paradoxa',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '3-5 feet',
                bloomTime: 'Spring to Fall',
                benefits: ['Drought tolerant', 'Showy seed heads', 'Wildlife shelter']
            }
        ],
        trees: [
            {
                name: 'Mesquite',
                scientificName: 'Prosopis glandulosa',
                sun: 'Full Sun',
                soil: 'Adaptable',
                height: '20-30 feet',
                bloomTime: 'Spring',
                benefits: ['Nitrogen fixer', 'Drought tolerant', 'Wildlife food']
            },
            {
                name: 'Desert Willow',
                scientificName: 'Chilopsis linearis',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '15-30 feet',
                bloomTime: 'Spring to Fall',
                benefits: ['Ornamental flowers', 'Drought tolerant', 'Hummingbird attractor']
            }
        ]
    },
    west: {
        wildflowers: [
            {
                name: 'California Poppy',
                scientificName: 'Eschscholzia californica',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '1-2 feet',
                bloomTime: 'Spring to Summer',
                benefits: ['Drought tolerant', 'Self-seeding', 'State flower']
            },
            {
                name: 'Lupine',
                scientificName: 'Lupinus spp.',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '1-4 feet',
                bloomTime: 'Spring',
                benefits: ['Nitrogen fixer', 'Pollinator friendly', 'Variety of colors']
            }
        ],
        grasses: [
            {
                name: 'California Fescue',
                scientificName: 'Festuca californica',
                sun: 'Full Sun to Partial Shade',
                soil: 'Well-drained',
                height: '2-3 feet',
                bloomTime: 'Spring',
                benefits: ['Drought tolerant', 'Erosion control', 'Deer resistant']
            }
        ],
        shrubs: [
            {
                name: 'Ceanothus',
                scientificName: 'Ceanothus spp.',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '3-10 feet',
                bloomTime: 'Spring',
                benefits: ['Drought tolerant', 'Pollinator magnet', 'Evergreen']
            }
        ],
        trees: [
            {
                name: 'Coast Live Oak',
                scientificName: 'Quercus agrifolia',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '20-70 feet',
                bloomTime: 'Spring',
                benefits: ['Evergreen', 'Wildlife habitat', 'Drought tolerant']
            },
            {
                name: 'Western Redbud',
                scientificName: 'Cercis occidentalis',
                sun: 'Full Sun to Partial Shade',
                soil: 'Well-drained',
                height: '10-18 feet',
                bloomTime: 'Spring',
                benefits: ['Showy flowers', 'Drought tolerant', 'Wildlife support']
            }
        ]
    },
    northwest: {
        wildflowers: [
            {
                name: 'Salal',
                scientificName: 'Gaultheria shallon',
                sun: 'Full Shade to Partial Sun',
                soil: 'Acidic, moist',
                height: '2-6 feet',
                bloomTime: 'Spring',
                benefits: ['Evergreen', 'Wildlife food', 'Erosion control']
            },
            {
                name: 'Oregon Grape',
                scientificName: 'Mahonia aquifolium',
                sun: 'Full Sun to Full Shade',
                soil: 'Well-drained',
                height: '3-6 feet',
                bloomTime: 'Spring',
                benefits: ['Evergreen', 'Pollinator friendly', 'Edible berries']
            }
        ],
        grasses: [
            {
                name: 'Idaho Fescue',
                scientificName: 'Festuca idahoensis',
                sun: 'Full Sun',
                soil: 'Well-drained',
                height: '1-2 feet',
                bloomTime: 'Summer',
                benefits: ['Drought tolerant', 'Low water', 'Native grassland']
            }
        ],
        shrubs: [
            {
                name: 'Red-flowering Currant',
                scientificName: 'Ribes sanguineum',
                sun: 'Full Sun to Partial Shade',
                soil: 'Well-drained',
                height: '6-10 feet',
                bloomTime: 'Early Spring',
                benefits: ['Early pollinator source', 'Showy flowers', 'Drought tolerant']
            }
        ],
        trees: [
            {
                name: 'Douglas Fir',
                scientificName: 'Pseudotsuga menziesii',
                sun: 'Full Sun',
                soil: 'Moist, well-drained',
                height: '60-250 feet',
                bloomTime: 'Spring',
                benefits: ['Timber tree', 'Wildlife habitat', 'Carbon sequestration']
            },
            {
                name: 'Vine Maple',
                scientificName: 'Acer circinatum',
                sun: 'Full Sun to Full Shade',
                soil: 'Moist, well-drained',
                height: '15-25 feet',
                bloomTime: 'Spring',
                benefits: ['Fall color', 'Understory tree', 'Wildlife support']
            }
        ]
    }
};

// Plant Finder Function
function findPlants() {
    const region = document.getElementById('region-select').value;
    const plantType = document.getElementById('plant-type').value;
    const sunRequirements = document.getElementById('sun-requirements').value;
    const resultsContainer = document.getElementById('plants-results');
    
    if (!region || !plantType) {
        resultsContainer.innerHTML = '<p class="message">Please select both a region and plant type to see results.</p>';
        return;
    }
    
    const plants = nativePlants[region]?.[plantType] || [];
    
    if (plants.length === 0) {
        resultsContainer.innerHTML = '<p class="message">No plants found for your selection. Try different filters.</p>';
        return;
    }
    
    // Filter by sun requirements if specified
    let filteredPlants = plants;
    if (sunRequirements) {
        const sunMap = {
            'full-sun': 'Full Sun',
            'partial-shade': 'Partial Shade',
            'full-shade': 'Full Shade'
        };
        filteredPlants = plants.filter(plant => 
            plant.sun.includes(sunMap[sunRequirements])
        );
    }
    
    if (filteredPlants.length === 0) {
        resultsContainer.innerHTML = '<p class="message">No plants found matching your sun requirements. Try different filters.</p>';
        return;
    }
    
    // Display results
    resultsContainer.innerHTML = filteredPlants.map(plant => `
        <div class="plant-card">
            <div class="plant-image">
                <i class="fas fa-leaf"></i>
            </div>
            <div class="plant-info">
                <h4>${plant.name}</h4>
                <p class="scientific-name">${plant.scientificName}</p>
                <div class="plant-requirements">
                    <span class="requirement">${plant.sun}</span>
                    <span class="requirement">${plant.height}</span>
                    <span class="requirement">${plant.bloomTime}</span>
                </div>
                <p><strong>Soil:</strong> ${plant.soil}</p>
                <p><strong>Benefits:</strong></p>
                <ul>
                    ${plant.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

// Open donation links
function openDonationLink(url) {
    window.open(url, '_blank');
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll behavior for hero section
let lastScrollY = 0;
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Hide/show hero based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide hero
        hero.classList.add('scrolled-down');
    } else {
        // Scrolling up - show hero
        hero.classList.remove('scrolled-down');
    }
    
    lastScrollY = currentScrollY;
    
    // Header scroll effect
    if (window.scrollY > 100) {
        header.style.background = 'rgba(245, 245, 240, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(45, 62, 47, 0.15)';
    } else {
        header.style.background = 'rgba(245, 245, 240, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize page with some default plants
document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('plants-results');
    resultsContainer.innerHTML = '<p class="message">Select your region and plant type to discover native plants perfect for your area.</p>';
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.impact-card, .organization-card, .plant-card, .benefit-card, .resource-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
