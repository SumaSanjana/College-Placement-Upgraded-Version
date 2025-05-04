import { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import '../styles/dashboard.css';

export default function VideoCall({ peerId }) {
  const [peer, setPeer] = useState(null);
  const [status, setStatus] = useState('Connecting...');
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    const peerInstance = new Peer(peerId, { host: 'localhost', port: 9000, path: '/peerjs' });
    setPeer(peerInstance);

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localVideoRef.current.srcObject = stream;
        
        peerInstance.on('call', call => {
          setStatus('Incoming call...');
          call.answer(stream);
          
          call.on('stream', remoteStream => {
            setStatus('Call connected');
            remoteVideoRef.current.srcObject = remoteStream;
          });
          
          call.on('close', () => {
            setStatus('Call ended');
          });
        });

        peerInstance.on('open', id => {
          setStatus(`Ready (ID: ${id})`);
        });
      })
      .catch(err => {
        setStatus('Error accessing media devices');
        console.error(err);
      });

    return () => {
      if (peerInstance) peerInstance.destroy();
    };
  }, [peerId]);

  const callPeer = () => {
    if (!peer) return;
    
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setStatus('Calling...');
        const call = peer.call(peerId, stream);
        
        call.on('stream', remoteStream => {
          setStatus('Call connected');
          remoteVideoRef.current.srcObject = remoteStream;
        });
        
        call.on('close', () => {
          setStatus('Call ended');
        });
      })
      .catch(err => {
        setStatus('Error starting call');
        console.error(err);
      });
  };

  return (
    <div>
      <p className="status-message">{status}</p>
      <div className="video-grid">
        <video ref={localVideoRef} autoPlay muted playsInline className="local-video" />
        <video ref={remoteVideoRef} autoPlay playsInline className="remote-video" />
      </div>
      <button onClick={callPeer} className="btn btn-primary">
        Start Call
      </button>
    </div>
  );
}