import {
    type Rarity,
    RARITIES,
    RARITY_COLORS,
    contributors as rawContributors,
} from '../data/contributors';

// Resolves rarity for contributors with 'Random' rarity at runtime
function randomRarity(): Rarity {
    return RARITIES[Math.floor(Math.random() * RARITIES.length)];
}

interface ResolvedContributor {
    name: string;
    profile: string;
    roles: string[];
    blurb: string;
    rarity: Rarity;
}

const contributors: ResolvedContributor[] = rawContributors.map((c) => ({
    ...c,
    rarity: c.rarity === 'Random' ? randomRarity() : c.rarity,
}));

// Card rendering

function createCard(contributor: ResolvedContributor): string {
    const url = `${import.meta.env.BASE_URL}`;
    const colors = RARITY_COLORS[contributor.rarity];
    const borderColor = colors.split(/\s+/)[0];
    const textColor = colors.split(/\s+/).filter(c => c.startsWith('text-'))[0];

    return `
        <div class="w-full flex-shrink-0 flex justify-center px-4">
            <div class="w-72 rounded-lg border-2 ${borderColor} bg-kabul/80 overflow-hidden">
                <!-- Name -->
                <div class="px-4 pt-4 pb-2">
                    <h3 class="font-bold text-lg">${contributor.name}</h3>
                </div>

                <!-- Portrait -->
                <div class="px-4">
                    <img
                        src="${url}${contributor.profile}"
                        alt="${contributor.name}"
                        class="w-full h-48 object-cover rounded border ${borderColor}"
                    />
                </div>

                <!-- Roles & Info blurb -->
                <div class="px-4 py-3">
                    <p class="text-xs font-semibold ${textColor} mb-1">
                        ${contributor.roles.join(', ')}
                    </p>
                    <p class="text-sm leading-relaxed">${contributor.blurb}</p>
                </div>

                <!-- Rarity badge -->
                <div class="px-4 pb-4">
                    <span class="inline-block text-xs font-bold px-3 py-1 rounded-full border ${borderColor} ${textColor}">
                        ★ ${contributor.rarity}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// Carousel Logic

function initCarousel(): void {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (!track || !dotsContainer || !prevBtn || !nextBtn) return;

    // Inject all cards into the track
    track.innerHTML = contributors.map(createCard).join('');

    let currentIndex = 0;
    const total = contributors.length;

    // Inject navigation dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'w-3 h-3 rounded-full transition-colors';
        dot.setAttribute('aria-label', `Go to contributor ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }

    function updateCarousel(): void {
        // Slide track
        track!.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        const dots = dotsContainer!.querySelectorAll('button');
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.className = 'w-3 h-3 rounded-full bg-cream-can transition-colors';
            } else {
                dot.className = 'w-3 h-3 rounded-full bg-swirl/40 transition-colors';
            }
        });
    }

    function goTo(index: number): void {
        currentIndex = index;
        updateCarousel();
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % total;
        updateCarousel();
    });

    updateCarousel();
}

// Init

document.addEventListener('DOMContentLoaded', initCarousel);