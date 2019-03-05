import './documentVerify.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tesseract from 'tesseract.js';
import renderHTML from 'react-render-html';
import { Upload, Icon, Card, Modal, Button, Progress  } from 'antd';



class DocumentVerify extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        fileUrl: null,
        progressStatus: 0,
        imageResult: null,
    };

    handleImage = () => {
        const { previewImage, fileUrl } = this.state;
        console.log(previewImage, fileUrl);
        if(previewImage){
            Tesseract.recognize(previewImage)
                .progress((p) => {
                    console.log('progress', p);
                    this.setState({progressStatus: p})
                })
                .then((result) => {
                    console.log('result', result);
                    this.setState({imageResult: result})
                })
        }
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = (file) => {
        this.setState({
            fileUrl: file.url || file.thumbUrl,
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => {
        console.log(fileList);
        this.setState({ fileList });
        if(fileList[0].status === "done"){
            this.setState({fileList, fileUrl : fileList[0].thumbUrl})
        }
    };



    render() {
        const { previewVisible, previewImage, fileList, progressStatus, imageResult } = this.state;
        console.log(this.state);
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div className="document_container">
                Uplaod Image to extract text..
                <Upload
                    action="/api/file"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                <Button className="scan-button" type="primary" onClick={this.handleImage}>Scan Image..</Button>
                {/* Left card to show upladed Image*/}
                <Card title="Uploaded Stats.." bordered={true} style={{ width: '45%', float: 'left' }}>
                    Text Confidence : {imageResult ? imageResult.confidence+'%' : '0%'}
                    {imageResult ? <div>{imageResult.text}</div> : null}
                </Card>

                {/*Right Card to show result text*/}
                <Card title="Extracted Text.." bordered={true} style={{ width: '45%', float: 'right' }}>
                    {imageResult ? renderHTML(imageResult.html) : null}
                </Card>

                <Progress percent={Math.round(progressStatus.progress * 100)} width={80} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, null)(
    DocumentVerify
);