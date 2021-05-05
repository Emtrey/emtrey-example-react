import React from "react"
import { Link } from "gatsby"

import {
  useProduct,
} from '@trevend/kit'

import Layout from "../components/layout"
import SEO from "../components/seo"
import withTrevend from '../components/withTrevend';

const ProductExample = () => {
  const { loading, product } = useProduct('EXAMPLE_PRODUCT_ID')

  if (loading) {
    return 'Loading'
  }

  return <Layout>
    <SEO title={`Product ${product.title}`} />
    <h1>{`Product ${product.title}`}</h1>
    <p>Price: {product.price}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
}

export default withTrevend(ProductExample);
