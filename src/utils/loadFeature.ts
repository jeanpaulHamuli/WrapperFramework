export const loadFeature = async (featureName: string) => {
    try {
      const featureModule = await import(`../features/${featureName}/src/index.ts`);
      return featureModule.default || featureModule;
    } catch (error) {
      console.error(`Error loading feature "${featureName}":`, error);
      throw new Error(`Feature "${featureName}" could not be loaded.`);
    }
};
  