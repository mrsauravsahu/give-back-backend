import models from '../../db/models';

export const trips = async (id) => {
  const tripsData = await models.trips.getTripsAsync(id);

  const tripTransactionPromises = tripsData
    .map(p => models.transactions.getTripTransactionsAsync(p.id));
  const tripMemberPromises = tripsData
    .map(p => models.tripMembers.getTripMembersAsync(p.id));

  const tripMembers = await Promise.all(tripMemberPromises);
  const tripTransactions = await Promise.all(tripTransactionPromises);

  return tripsData.map((trip, index) => ({
    ...(trip.toJSON()),
    members: tripMembers[index],
    transactions: tripTransactions[index],
  }));
};


export default { trips };

