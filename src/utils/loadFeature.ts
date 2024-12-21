export async function loadFeature (featureName: string): Promise<any> {
    try {
        const feature = await import(`../features/${featureName}/src/index`);
        return feature.default;
    } catch (error) {
        console.error(`Failed to load feature: ${featureName}`, error);
        throw new Error(`Feature ${featureName} not found`);
    }
}
  