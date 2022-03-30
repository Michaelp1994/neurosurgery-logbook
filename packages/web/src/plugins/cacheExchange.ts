import { cacheExchange, Resolver } from "@urql/exchange-graphcache";
import gql from "graphql-tag";
const transformToDate: Resolver = (parent, _args, _cache, info) => {
  const value = parent[info.fieldName];
  //console.log(info.fieldName, ": ", typeof value, "= ", value);
  if (typeof value !== "string") return null;
  return new Date(value).toISOString().slice(0, 10); // Should probably find a better way of doing this later on.
};

export default cacheExchange({
  updates: {
    Mutation: {
      createRotation(result, _args, cache) {
        const allRotations = gql`
          {
            allRotations {
              id
            }
          }
        `;
        cache.updateQuery({ query: allRotations }, (data) => {
          if (!data || !data.allRotations) return null;
          data.allRotations.push(result.createRotation);
          return data;
        });
      },
    },
  },
  keys: {
    CaseDuration: () => null,
    Statistics: () => null,
  },
  resolvers: {
    Consult: {
      dateOfBirth: transformToDate,
      procedureDate: transformToDate,
      admissionDate: transformToDate,
      diagnosisDate: transformToDate,
      dischargeDate: transformToDate,
      recurrenceDate: transformToDate,
      updatedAt: transformToDate,
      createdAt: transformToDate,
      deletedAt: transformToDate,
      // firstName: (parent) => parent.firstName.toUpperCase(),
    },
    Rotation: {
      startDate: transformToDate,
      endDate: transformToDate,
    },
  },
});
