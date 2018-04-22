import meResolvers from './me';
import friendsResolvers from './friends';

export default {
  ...meResolvers,
  ...friendsResolvers,
};

