import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchProductById } from "../../services/productService";
import { useEffect, useState } from "react";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Spinner from "react-bootstrap/Spinner";
import './ProductModal.css';

function ProductModal({ show, onHide, id }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      if (show) {
        setLoading(true);
        setError(null);
        try {
          const details = await fetchProductById(id);
          setProductDetails(details);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDetails();
  }, [show, id]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal"
    >
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <ProductCarousel images={productDetails?.images} />
          <Modal.Body>
            <h4>{productDetails?.title}</h4>
            <p>{productDetails?.description}</p>
            <div className="text-center">
              <Button onClick={onHide}>Close</Button>
            </div>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}

export default ProductModal;
