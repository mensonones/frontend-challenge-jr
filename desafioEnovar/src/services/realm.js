import Realm from 'realm';

import FilmeSchema from '~/schemas/FilmeSchema';


export default function getReal() {
  return Realm.open({
    schema: [FilmeSchema],
  });
}
