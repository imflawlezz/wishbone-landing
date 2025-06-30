import {resolveAsset} from "@/utils/resolveAsset";

export const ProjectCardsData = [
    {
        label: "Reeding House",
        description: "A harmonious blend of modern minimalism and organic warmth.",
        imageURL: resolveAsset('projects', 'reeding-house.jpeg')
    },
    {
        label: "The Marble Staircase",
        description: "A sculptural centerpiece that marries luxury with precision.",
        imageURL: resolveAsset('projects', 'marble-staircase.jpeg')
    },
    {
        label: "The Swirling Staircase",
        description: "Dynamic and daring, The Swirling Staircase defies convention with its fluid, helical form.",
        imageURL: resolveAsset('projects', 'swirling-staircase.jpeg'),
        className: "justify-start"
    }
]