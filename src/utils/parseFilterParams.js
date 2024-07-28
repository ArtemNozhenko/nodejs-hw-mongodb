const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return;

  const isContactType = (contactType) =>
    ['personal', 'home'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite === 'boolean') {
    return isFavourite;
  }

  if (typeof isFavourite === 'string') {
    return isFavourite.toLowerCase() === 'true';
  }

  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
