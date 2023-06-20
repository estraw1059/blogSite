import React,  {useState, useEffect, useRef} from 'react';
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import ReactQuill from 'react-quill'
import { Container, Button, Row, Modal, Form } from 'react-bootstrap';
import db, {auth} from '../../Firebase';
import { doc, getDoc, setDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './EditBlogPost.css'

const EditBlogPost = () => {

    const { id } = useParams();
    const [blogData, setBlogData] = useState([]);
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editTitleField, setEditTitleField] = useState("");
    const quillRef = useRef(null);
    const navigate = useNavigate();

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        const getDocumentById = async () => {
            try {
                const docRef = doc(db, 'blogPost', id);
                getDoc(docRef).then((doc) => {
                    console.log(doc.data(), doc.id);
                    setBlogData(doc.data());
                    setEditTitleField(doc.data().title);
                });

            } catch (error) {
                console.error('Error getting blog post', error);
                setBlogData(null);
            }
        }
        getDocumentById();
        const adminListener = onAuthStateChanged(auth, (user) => {
            setUser(user);
          });
        return () => {
            adminListener();
        }

        }, [id]);

    const saveChanges = () => {
      const editor = quillRef.current.getEditor();
      const text = editor.getText();
      const docRef = doc(db, 'blogPost', id);
      const dataUpdate = {
        'text': text
      }
      setDoc(docRef, dataUpdate).then(() => {
        navigate(`/blog/${id}`)
      })
    }

    const handleInputChange = (event) => {
      setEditTitleField(event.target.value);
    };

    var modules = {
        toolbar: [
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] }
          ],
          [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
      };
      var formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
      ];

      if (blogData == null) {
        return <div>Loading</div>
      }
      if (user) {
        return (
          <>
            <Container fluid>
              <Row>
                <h1 className='header'>Edit Blog Post</h1>
              </Row>
              <Row>
                <Button className='subheader' variant="link" onClick={handleShow}>{blogData.title}</Button>
              </Row>
              <Row>
                <div className='m-2'>
                  <ReactQuill
                    modules={modules}
                    formats={formats}
                    value={blogData.text}
                    style={{ height: '100%', overflow: 'auto' }}
                    ref={quillRef}
                  />
                </div>
              </Row>
              <Row className='d-flex justify-content-center'>
                <Button style={{width: '100px'}} onClick={saveChanges}>Save</Button>
              </Row>
            </Container>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>My Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Control
                    type="text"
                    defaultValue={editTitleField}
                    onChange={handleInputChange}
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
              </Modal>
            </>
          );
      } else {
        return (
            <div>You are not logged in. <a href='/admin/login'>Please login</a></div>
        )
      }
};

export default EditBlogPost;