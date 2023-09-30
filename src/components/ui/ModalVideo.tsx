import { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";

export const ModalVideo = ({ videoUrl, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const handleVideoClose = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      className="custom-modal"
      destroyOnClose
      width={1000}
      bodyStyle={{
        height: 500,
      }}
    >
      <VideoContainer>
        <iframe
          width="100%"
          height="500"
          src={`${videoUrl}?autoplay=1&mute=0`}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; encrypted-media"
          title="YouTube Video"
        ></iframe>
        {isPlaying && (
          <CloseButton onClick={handleVideoClose}>
            <i className="fas fa-times"></i>
          </CloseButton>
        )}
      </VideoContainer>
    </Modal>
  );
};
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
`;
