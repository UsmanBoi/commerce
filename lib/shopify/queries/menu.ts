export const getMenuQuery = /* GraphQL */ `
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
        items {
          # Add this to fetch sub-items
          title
          url
          items {
            # Optionally go another level deeper
            title
            url
          }
        }
      }
    }
  }
`;
