import React, { useState } from 'react';
import { Button, Label, Textarea } from '@headlessui/react';
import axios from 'axios';
import Card from './Card';

const SdohAssessment = () => {
  const [data, setData] = useState({
    housing: '',
    foodSecurity: '',
    transportation: '',
    employment: '',
    socialSupport: ''
  });

  const [sdoHScore, setSdoHScore] = useState(null);
  const [identifiedNeeds, setIdentifiedNeeds] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const sendToDialogflow = async (intent, value) => {
    const result = await axios.post(
      'https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent',
      {
        queryInput: {
          text: {
            text: value,
            languageCode: 'en-US'
          }
        }
      },
      {
        headers: {
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`
        }
      }
    );
    return result.data.queryResult.fulfillmentText;
  };

  const calculateSDoHScore = async () => {
    const housingScore = await sendToDialogflow('Assess Housing', data.housing);
    const foodSecurityScore = await sendToDialogflow('Assess Food Security', data.foodSecurity);
    const transportationScore = await sendToDialogflow('Assess Transportation', data.transportation);
    const employmentScore = await sendToDialogflow('Assess Employment', data.employment);
    const socialSupportScore = await sendToDialogflow('Assess Social Support', data.socialSupport);

    const totalScore = parseInt(housingScore) + parseInt(foodSecurityScore) + parseInt(transportationScore) + parseInt(employmentScore) + parseInt(socialSupportScore);

    setSdoHScore(totalScore);
    setIdentifiedNeeds(['housing', 'foodSecurity', 'transportation', 'employment', 'socialSupport']);
  };

  return (
    <div className="p-4">
      <Card title="SDoH Assessment">
        <Label htmlFor="housing">Housing</Label>
        <Textarea id="housing" name="housing" value={data.housing} onChange={handleInputChange} className="mb-2" />
        <Label htmlFor="foodSecurity">Food Security</Label>
        <Textarea id="foodSecurity" name="foodSecurity" value={data.foodSecurity} onChange={handleInputChange} className="mb-2" />
        <Label htmlFor="transportation">Transportation</Label>
        <Textarea id="transportation" name="transportation" value={data.transportation} onChange={handleInputChange} className="mb-2" />
        <Label htmlFor="employment">Employment</Label>
        <Textarea id="employment" name="employment" value={data.employment} onChange={handleInputChange} className="mb-2" />
        <Label htmlFor="socialSupport">Social Support</Label>
        <Textarea id="socialSupport" name="socialSupport" value={data.socialSupport} onChange={handleInputChange} className="mb-2" />
        <Button onClick={calculateSDoHScore}>Calculate SDoH Score</Button>

        {sdoHScore !== null && (
          <div className="mt-2">
            <p>SDoH Score: {sdoHScore}</p>
            <p>Identified Needs: {identifiedNeeds.join(', ')}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SdohAssessment;
