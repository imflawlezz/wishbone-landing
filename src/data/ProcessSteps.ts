import {resolveAsset} from "@/utils/resolveAsset";

export const ProcessSteps = [
    {
        label: "Sketching",
        description: `The journey begins with bold strokes and boundless creativity. Hand-drawn sketches capture the
            first sparks of inspiration, allowing ideas to flow freely before taking shape.`,
        imageURL: resolveAsset('icons', 'sketching.svg')
    },
    {
        label: "Finalizing",
        description: `Precision meets artistry as the vision is honed to perfection. Detailed renderings, material 
        selections, and technical plans transform sketches into actionable blueprints.`,
        imageURL: resolveAsset('icons', 'finalizing.svg')
    },
    {
        label: "Building",
        description: `Where imagination becomes reality. With meticulous craftsmanship and cutting-edge techniques, the 
        design rises from paper into physical form.`,
        imageURL: resolveAsset('icons', 'building.svg')
    }
]