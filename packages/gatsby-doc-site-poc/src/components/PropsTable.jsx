import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// TODO: rewrite with DS Table component and refine what is included here
const PropsTable = (props) => {
  //  Get all of the component meta data
  // TODO: remove hard-coded "Alert"
  const data = useStaticQuery(graphql`
    {
      componentMetadata(displayName: { eq: "Alert" }) {
        id
        props {
          docblock
          name
          type {
            name
            value
            raw
          }
          defaultValue {
            computed
            value
          }
          required
        }
        displayName
        composes
        description {
          id
          text
        }
      }
    }
  `);

  // Finding docs for current component.
  const getDocsForComponent = (data) => {
    const result = data.componentMetadata;

    return result || null;
  };

  // Variable to get all the props
  const componentProps = getDocsForComponent(data).props;

  const getPropValue = (type) => {
    if (typeof type.value === 'string') {
      return type.value;
    } else if (type.value.length) {
      return type.value.map((type) => {
        return type.value || type.name;
      });
    }
  };

  // Table row callback function
  const propItem = (prop) => {
    // Getting the component values
    const propName = prop.name;
    const propType = prop.type.name;
    const propIsRequired = prop.required;
    const propDocBlock = prop.docblock;
    const propDefault = prop.defaultValue === null ? ' ' : prop.defaultValue.value;
    const propOpts = prop.type.value === null ? null : getPropValue(prop.type);

    // Returning the row
    return (
      <tr key={prop.name} className="">
        <td className="">
          {propName}
          {propIsRequired && '*'}
        </td>
        <td className="">{propType}</td>
        <td className="">{propOpts || propDefault}</td>
        <td className="">{propDefault}</td>
        <td className="">{propDocBlock}</td>
      </tr>
    );
  };

  return (
    <table className="">
      <tbody>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Option(s)</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
        {componentProps.map(propItem)}
      </tbody>
    </table>
  );
};

export default PropsTable;
