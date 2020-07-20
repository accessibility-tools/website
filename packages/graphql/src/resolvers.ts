import { UserInputError } from 'apollo-server-express';
import { isUrl } from './report';

export const resolvers = {
  Query: {
    report: (root, args) => {
      const { url } = args;

      console.log('URL', url);

      if (!isUrl(url)) {
        throw new UserInputError('Invalid site url', {
          invalidArgs: Object.keys(args),
        });
      }

      return {};
    },
  },
};
