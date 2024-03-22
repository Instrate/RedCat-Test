import { Route } from '../functions/routes';

let Path: any = {
  root: '',
};

Path.api = {
  root: Route(Path.root, 'api'),
};

Path.api.docs = Route(Path.api.root, 'docs');
Path.api.v1 = {
  root: Route(Path.api.root, 'v1'),
};

Path.api.v1.auth = {
  root: Route(Path.api.v1.root, 'auth'),
}

Path.api.v1.auth.login = Route(Path.api.v1.auth.root, 'login');
Path.api.v1.auth.register = Route(Path.api.v1.auth.root, 'register');

Path.api.v1.article = {
  root: Route(Path.api.v1.root, 'article'),
}

Path.api.v1.account = {
  root: Route(Path.api.v1.root, 'account'),
}


export { Path };
