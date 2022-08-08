import React from "react";
import { Row, Col, Input, Button, Typography, notification } from "antd";
import {
    SearchOutlined,
    UserOutlined,
    GithubOutlined,
} from "@ant-design/icons";
import ReactTypingEffect from "react-typing-effect";
import BackDrop from "./backdrop";
const { Title } = Typography;

function SearchBarHome() {
    const notify = () => {
        if (sessionStorage["badge"] === undefined) {
            sessionStorage["badge"] = true;
        }
        if (sessionStorage["badge"] === "true") {
            notification.info({
                message: "Liked it? 😍",
                description: (
                    <React.Fragment>
                        Placeholder{" "}
                        <a
                            href="https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTIwbG92ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            target="_blank"
                            rel="norefferer"
                        >
                            placeholder.
                        </a>
                    </React.Fragment>
                ),
                duration: 8,
                icon: <GithubOutlined />,
                placement: "bottomLeft",
                closeIcon: " ",
            });
            sessionStorage["badge"] = false;
        }
    };
    return (
        <React.Fragment>
            {notify()}
            <BackDrop />
            <Row justify="center" align="middle" className="home">
                <Col xs={24} lg={12}>
                    <Title className="title">
                        RMM
                        <ReactTypingEffect className="title-small"
                            text={[
                                "Rate Managers",
                                "Read Reviews",
                                "Interact Anonymously"
                            ]}
                            eraseDelay={2000}
                            eraseSpeed={75}
                            speed={75}
                        />
                    </Title>
                </Col>
                <Col xs={24} lg={12}>
                    <Input
                        suffix={
                            <Button
                                type="text"
                                icon={
                                    <UserOutlined
                                        onClick={() =>
                                            (window.location.href = "/user")
                                        }
                                    />
                                }
                            />
                        }
                        placeholder="Search Managers"
                        prefix={<SearchOutlined />}
                        onClick={() => (window.location.href = "/search")}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default SearchBarHome;
