import models from '../db/models';

export const trips = id => models.trips.getTripsAsync(id);

export default { trips };

