export const getNextId = async (collection) => {
  try {
    let details = await GetCollectionsByAddress({
      sContractAddress: collection,
    });
    console.log('details collection', details);
    return details.nextId;
  } catch (e) {
    console.log('error in api', e);
  }
};
