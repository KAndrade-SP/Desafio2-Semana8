export const validName = new RegExp('^(?!.*?s{2})[A-Za-zÀ-ÿ ]{3,45}$');

export const validSubtitle = new RegExp('^(?!.*?s{2})[A-Za-zÀ-ÿ ]{3,45}$')

export const validType = new RegExp ('^(?!.*?s{2})[A-Za-zÀ-ÿ ]{3,45}$')

export const validPrice = new RegExp ('^([0-9]{0,6}(.[0-9]{0,2}))$')

export const validFeatures = new RegExp ('^(?!.*?s{2})[A-Za-zÀ-ÿ. ]{3,200}$')

export const validDescription = new RegExp ('^[A-Za-zÀ-ÿ,. -]{3,200}$')