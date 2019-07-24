import * as React from "react";
import * as Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// @eslint-disable-line
if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#root");
}
interface Props {
  modalIsOpen: boolean;
}
interface State {
  modalIsOpen: boolean;
}

export default class WeatherModal extends React.Component<Props, State> {
  public state: { modalIsOpen: boolean };
  constructor(props: Props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidUpdate(prevProps: Props) {
    // Typical usage (don't forget to compare props):
    if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
      this.setState({ modalIsOpen: this.props.modalIsOpen });
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Die Wetterseite ist umgezogen!</h2>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col text-center">
              <img
                className="img-fluid p-5"
                style={{ maxWidth: "200px" }}
                src="/img/moving.svg"
              />
              <span
                className=" p-5"
                style={{ fontSize: "1.2rem", fontWeight: 300 }}
              >
                <a
                  href="http://wetter.krystof.eu"
                  className="btn btn-primary btn-lg active"
                  style={{ backgroundColor: "#418DFF", borderColor: "#418DFF" }}
                  role="button"
                  aria-pressed="true"
                >
                  Klicke hier, um weitergeleitet zu werden.
                </a>
              </span>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
