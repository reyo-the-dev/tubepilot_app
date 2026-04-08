import { useGetUserProjects } from "@/api_hooks/project.hooks";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const VideosListScreen = () => {
  const { data } = useGetUserProjects();

  return (
    <div>
      <CustomButton href={"/videos/create"}>Create Video</CustomButton>
      <hr />
      <div>
        <Row>
          {data?.success &&
            data?.data?.map((project) => {
              return (
                <Col
                  key={project.id}
                  xs={6}
                  md={3}
                  style={{
                    marginBottom: "20px",
                    height:'100%'
                  }}
                >
                  <Link href={`/videos/create?id=${project.id}`}>
                    <Card>
                      <Card.Body>
                        <p>Topic : {project.topic}</p>
                        <br />
                        <p>Title : {project.title}</p>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default VideosListScreen;
