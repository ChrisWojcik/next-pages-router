import { defineComponents } from '@contentful/experiences-sdk-react';
import { Button } from './components/Button';

defineComponents([
  // Add your custom components here
  // example:
  {
    component: Button,
    definition: {
      id: 'button',
      name: 'Button',
      category: 'Custom Components',
      variables: {
        text: {
          displayName: 'Text',
          type: 'Text',
          defaultValue: 'Click me'
        },
      },
    },
  },
]);
