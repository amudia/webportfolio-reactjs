import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './experience.css';

class ExperienceComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Educations</p>
              <div className="timeline-entry">
                  <Card>
                      <CardHeader title="STMIK Atma Luhur" subtitle="Bachelor degree of computer science"/>
                      
                  </Card>
                </div>
                <p className="headline">Working experience</p>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Software Developer" subtitle="PT Cudo Communication (March	2020 - Now)"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Installation of a quality management system according to ISO 9001 for the subsidiary in Shenzhen.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip style={{borderRadius:4, backgroundColor:'#CBCEC4'}}>React Native</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip style={{borderRadius:4, backgroundColor:'#CBCEC4'}}>PHP</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip style={{borderRadius:4, backgroundColor:'#CBCEC4'}}>Go</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default ExperienceComponent;
