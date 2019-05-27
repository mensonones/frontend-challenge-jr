export default class FilmeSchema {
  static schema = {
    name: 'Filme',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      title: 'string',
      poster_path: 'string',
      overview: 'string',
      vote_average: 'int',
      release_date: 'string',
    },
  };
}
