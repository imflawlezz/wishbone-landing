const assetRoot = '/assets/';

export const assetPaths = {
    featured: `${assetRoot}featured`,
    icons: `${assetRoot}icons`,
    logos: `${assetRoot}logos`,
    projects: `${assetRoot}projects`,
    sections: `${assetRoot}sections`,
    team: `${assetRoot}team`,
} as const;

export type AssetCategory = keyof typeof assetPaths;