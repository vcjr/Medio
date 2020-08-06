import MediumEditor from 'medium-editor';

export const defaultOptions = {
  toolbar: {
    buttons: [
        'bold',
        'italic',
        {
            name: 'h1',
            action: 'append-h2',
            aria: 'header type 1',
            tagNames: ['h2'],
            contentDefault: '<b>H1</b>',
            classList: ['custom-class-h1'],
            attrs: {
                'data-custom-attr': 'attr-value-h1'
            }
        },
        {
            name: 'h2',
            action: 'append-h3',
            aria: 'header type 2',
            tagNames: ['h3'],
            contentDefault: '<b>H2</b>',
            classList: ['custom-class-h2'],
            attrs: {
                'data-custom-attr': 'attr-value-h2'
            }
        },
        'justifyCenter',
        'quote',
        'anchor',
        'image'
    ]
  },
  placeholder: {
    text: 'Tell your story',
    hideOnClick: false
  },
  paste: {
    forcePlainText: true,
    cleanPastedHTML: true,
    cleanReplacements: [],
    cleanAttrs: ['class', 'style', 'dir'],
    cleanTags: ['meta'],
    unwrapTags: []
  },
  autoLink: true,
  imageDragging: false
};

export const createNewEditor = (mainElement, options = defaultOptions) => {
  return new MediumEditor(mainElement, options);
};

export const createPlainNewEditor = (mainElement) => {
  return new MediumEditor(mainElement);
};

export const nonEditableEditor = (mainElement) => {
  return new MediumEditor(mainElement, { disableEditing: true, spellcheck: false})
}